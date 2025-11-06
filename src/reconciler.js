import {EmptyObject, flattenRenderResultChildren} from "@/utils";
import {buildVirtualTree} from "@/virtual-node";

/**
 * Build and mount whole subtree of virtual node.
 *
 * @param {VirtualNode} node
 */
function mountVirtualSubtree(node) {
  node.effect = 'Placement';

  if (node.isType('Component')) {
    node.createComponent();

    let renderResult = node.instance.render();
    renderResult = flattenRenderResultChildren(renderResult);
    let subtree = buildVirtualTree(renderResult)

    if (subtree) {
      node.appendChild(subtree);
    }
  }

  node.children.forEach((childNode) => {
    childNode.effect = 'Placement';
    mountVirtualSubtree(childNode);
  });
}

/**
 * Copy references such element reference, props or component instance.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 * @param {boolean} recursive
 */
function copyNodeReferences(currentNode, newNode, recursive = false) {
  if (currentNode.tag === newNode.tag) {
    newNode.oldProps = newNode.oldProps ?? EmptyObject;
    newNode.elementRef = newNode.elementRef ?? null;

    if (newNode.isType('Component')) {
      newNode.instance = currentNode.instance;
      newNode.instance.props = newNode.pendingProps ?? EmptyObject;
      // TODO: copy state and indicator if state changed
    }
  }

  if (recursive) {
    newNode.children.forEach((childNode, index) => {
      copyNodeReferences(currentNode.children[index], childNode, recursive);
    });
  }
}

/**
 * Checks if pending props are different from old props.
 * It's shallow comparison so object-like props are compared through reference.
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 */
function compareProps(oldProps, pendingProps) {
  if (typeof oldProps !== 'object' || typeof pendingProps !== 'object') {
    return false;
  }

  if (Object.keys(oldProps).length !== Object.keys(pendingProps).length) {
    return false;
  }

  return Object.entries(pendingProps).every(([key, value], index) => {
    return value === oldProps[key];
  });
}

/**
 * Checks if virtual node should be updated.
 * Virtual node should update if node's props are changed.
 *
 * @param {VirtualNode} node
 * @returns {boolean}
 */
function shouldUpdateNode(node) {
  return !compareProps(node.oldProps, node.pendingProps);
}

/**
 * Updates virtual node and if it is component then try to get new render result.
 *
 * @param {VirtualNode} node
 */
function updateNode(node) {
  node.effect = 'Update';
  node.pendingUpdate = true;

  if (!node.isType('Component')) {
    return;
  }

  let renderResult = node.instance.render();
  renderResult = flattenRenderResultChildren(renderResult);
  const subtree = buildVirtualTree(renderResult)

  if (subtree) {
    node.empty();
    node.appendChild(subtree);
  }
}

/**
 * Reuse current virtual node with children of new virtual node.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
function reuseNode(currentNode, newNode) {
  const clonedCurrentNode = currentNode.clone();

  if (newNode.isType('Component')) {
    let renderResult = newNode.instance.render();
    renderResult = flattenRenderResultChildren(renderResult);
    const subtree = buildVirtualTree(renderResult)

    if (subtree) {
      newNode.empty();
      newNode.appendChild(subtree);
    }
  }

  clonedCurrentNode.parent = newNode.parent;
  clonedCurrentNode.children = newNode.children;

  newNode.copyFrom(clonedCurrentNode);
}

/**
 * Finds a virtual node based on it's defined key.
 *
 * @param {VirtualNode} node
 * @param {string} key
 */
function findNodeWithKey(node, key) {
  for (const child of node.children) {
    if (child.key === key) {
      return child;
    }
  }

  return null;
}

/**
 * Finds a matching child in current node based on position or key.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newChildNode
 * @param {number} position
 */
function findMatchingChildNode(currentNode, newChildNode, position) {
  /** @type {VirtualNode} */
  let foundNode = null

  if (!currentNode) {
    return null;
  }

  if (newChildNode.key) {
    foundNode = findNodeWithKey(currentNode, newChildNode.key);
  }

  if (foundNode) {
    return foundNode;
  }

  if (currentNode.children.length <= position) {
    return null;
  }

  return currentNode.children[position];
}

/**
 * Compares nodes at the same position in two different trees and marks effects
 * that needs to be later processed.
 *
 * Possible effects:
 * - Placement (marked for placing as new DOM element)
 * - Update (marked for updating props of DOM element)
 * - Deletion (marked for removing DOM element)
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
export function reconcile(currentNode, newNode) {
  if (currentNode && currentNode.tag !== newNode.tag) {
    currentNode.effect = 'Deletion';
    mountVirtualSubtree(newNode);
    return;
  }

  if (!currentNode) {
    mountVirtualSubtree(newNode);
    return;
  } else if (!newNode.isType('Root')) {
    copyNodeReferences(currentNode, newNode);

    if (shouldUpdateNode(newNode)) {
      updateNode(newNode);
    } else {
      reuseNode(currentNode, newNode);
    }
  }

  const processedChildren = [];
  newNode.children.forEach((childNode, index) => {
    const matchingChild = findMatchingChildNode(currentNode, childNode, index);

    reconcile(matchingChild, childNode);
    processedChildren.push(childNode);
  });

  currentNode.children.forEach((childNode, index) => {
    if (!processedChildren.includes(childNode)) {
      childNode.effect = 'Deletion';
    }
  });
}
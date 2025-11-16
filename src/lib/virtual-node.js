import {EmptyObject} from "./utils";
import htmlTags from "html-tags";
import svgTags from "svg-tags";

export default class VirtualNode {
  /**
   * Initializes virtual node with type, tag and properties.
   *
   * @param {SparkJS.NodeType} type
   * @param {SparkJS.NodeTag} tag
   * @param {SparkJS.NodeProps} props
   */
  constructor(type, tag, props = {}) {
    const { key, ref, ...otherProps } = props;

    /** @type {string|undefined} */
    this.key = key;
    this.type = type;
    this.tag = tag;

    // Reference properties
    /** @type {SparkJS.Props} */
    this.oldProps = EmptyObject;
    /** @type {SparkJS.Props} */
    this.pendingProps = otherProps ?? EmptyObject;
    /** @type {Record<string, any>} */
    this.state = EmptyObject;
    /** @type {SparkJS.RefObject[]} */
    this.refs = [];
    /** @type {SparkJS.RefObject|null} */
    this.ref = ref;
    /** @type {Component|null} */
    this.instance = null;
    /** @type {HTMLElement|null} */
    this.elementRef = null;
    /** @type {Record<string, SparkJS.EventListener[]>} */
    this.listeners = EmptyObject;

    // Indicator properties
    /** @type {SparkJS.EffectType} */
    this.effect = '';
    /** @type {boolean} */
    this.mounted = false;
    /** @type {boolean} */
    this.pendingUpdate = false;
    /** @type {boolean} */
    this.stateChanged = false;

    // Node properties
    /** @type {VirtualNode|null} */
    this.parent = null;
    /** @type {VirtualNode[]} */
    this.children = [];
  }

  /**
   * Checks if virtual node is of certain type.
   *
   * @param {SparkJS.NodeType} type
   */
  isType(type) {
    return this.type === type;
  }

  /**
   * Checks if all children were mounted into DOM.
   *
   * @returns {boolean}
   */
  allChildrenMounted() {
    return this.children.reduce((count, childNode) => {
      let result = false;

      if (childNode.isType('Element') || childNode.isType('Text')) {
        result = childNode.elementRef !== null;
      } else if (childNode.isType('Component')) {
        result = childNode.mounted;
      }

      return count + (result && childNode.allChildrenMounted() ? 1 : 0);
    }, 0) === this.children.length;
  }

  /**
   * Checks if all children were updated in DOM.
   *
   * @returns {boolean}
   */
  allChildrenUpdated() {
    return this.children.reduce((count, childNode) => {
      return count + (!childNode.pendingUpdate && childNode.allChildrenUpdated() ? 1 : 0);
    }, 0) === this.children.length;
  }

  /**
   * Adds a listener to HTML element and store it's reference into listeners of virtual node.
   *
   * @param {string} type
   * @param {SparkJS.EventListener} listener
   */
  addEventListener(type, listener) {
    if (!this.elementRef) {
      return;
    }

    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    this.elementRef.addEventListener(type, listener);
    this.listeners[type].push(listener);
  }

  /**
   * Removes an event listener from HTML element and from listeners of virtual node.
   *
   * @param {string} type
   * @param {SparkJS.EventListener} listener
   */
  removeEventListener(type, listener) {
    /** @type {EventListener[]} */
    const listenersWithType = this.listeners[type] ?? [];

    if (listenersWithType.length === 0) {
      return;
    }

    let foundListenerIndex = -1;
    const foundListener = listenersWithType.find((anotherListener, index) => {
      if (anotherListener === listener) {
        foundListenerIndex = index;
        return true;
      }

      return false;
    });

    if (!foundListener) {
      throw new Error(`An event listener for ${type} on node ${this.tag} not found. Cause: event listener probably wasn't bound in constructor.`);
    }

    this.elementRef.removeEventListener(type, listener);
    listenersWithType.splice(foundListenerIndex, 1);
  }

  /**
   * Cleans all listeners from HTML element and from listeners of virtual node.
   */
  cleanListeners() {
    for (const [type, listeners] of Object.entries(this.listeners)) {
      if (!this.elementRef) {
        return;
      }

      listeners.forEach((listener) => {
        this.elementRef.removeEventListener(type, listener);
      });
    }

    this.listeners = EmptyObject;
  }

  /**
   * Creates an instance of component and copy it's state into virtual ode's state.
   */
  createComponent() {
    this.instance = new this.tag(this.pendingProps);
    this.state = this.instance.state;
  }

  /**
   * Appends a child node into current node.
   *
   * @param {VirtualNode} node
   */
  appendChild(node) {
    node.parent = this;
    this.children.push(node);
  }

  /**
   * Replaces a child node in current node with a new node.
   *
   * @param {VirtualNode} newNode
   * @param {VirtualNode} oldNode
   */
  replaceChild(newNode, oldNode) {
    const indexOf = this.children.indexOf(oldNode);

    if (indexOf >= 0) {
      newNode.parent = this;
      this.children[indexOf].parent = null;
      this.children[indexOf] = newNode;
    }
  }

  /**
   * Removes a child node from current node.
   *
   * @param {VirtualNode} node
   */
  removeChild(node) {
    const indexOf = this.children.indexOf(node);

    if (indexOf >= 0) {
      node.parent = null;
      this.children.splice(indexOf, 1);
    }
  }

  /**
   * Removes all children from current node.
   */
  empty() {
    this.children.forEach((node) => {
      node.parent = null;
    });

    this.children = [];
  }

  /**
   * Create another instance with same properties.
   *
   * @returns {VirtualNode}
   */
  clone() {
    const cloned = new VirtualNode(this.type, this.tag, {
      key: this.key,
      ...this.pendingProps
    });

    // Reference properties
    cloned.oldProps = this.oldProps;
    cloned.pendingProps = this.pendingProps;
    cloned.state = this.state;
    cloned.instance = this.instance;
    cloned.elementRef = this.elementRef;
    cloned.listeners = this.listeners;

    // Indicator properties
    cloned.effect = this.effect;
    cloned.mounted = this.mounted;
    cloned.pendingUpdate = this.pendingUpdate;
    cloned.stateChanged = this.stateChanged;

    // Node properties
    cloned.parent = this.parent;
    cloned.children = this.children;

    return cloned;
  }

  /**
   * Copy all data from source virtual node.
   *
   * @param {VirtualNode} sourceNode
   */
  copyFrom(sourceNode) {
    this.key = sourceNode.key;
    this.type = sourceNode.type;
    this.tag = sourceNode.tag;

    // Reference properties
    this.oldProps = sourceNode.oldProps;
    this.pendingProps = sourceNode.pendingProps;
    this.state = sourceNode.state;
    this.instance = sourceNode.instance;
    this.elementRef = sourceNode.elementRef;
    this.listeners = sourceNode.listeners;

    // Indicator properties
    this.effect = sourceNode.effect;
    this.mounted = sourceNode.mounted;
    this.pendingUpdate = sourceNode.pendingUpdate;
    this.stateChanged = sourceNode.stateChanged;

    // Node properties
    this.parent = sourceNode.parent;
    this.children = sourceNode.children;
  }
}

/**
 *
 * @param {JSX[]} jsxArray
 */
function checkKeysInJsxArray(jsxArray) {
  const usedKeys = [];

  return jsxArray.every((item) => {
    if (!item.attributes || !item.attributes.key || usedKeys.includes(item.attributes.key)) {
      return false;
    }

    usedKeys.push(item.attributes.key);
    return true;
  });
}

/**
 *
 * @param {SparkJS.RenderResult} renderResult
 * @param {VirtualNode|null} parent
 */
export function buildVirtualTree(renderResult, parent = null) {
  let {
    elementName = renderResult ?? '',
    attributes = {},
    children = []
  } = renderResult ?? {};

  /** @type {VirtualNode} */
  let node;

  if (typeof elementName === 'function') {
    node = new VirtualNode('Component', elementName, { children, ...attributes });
    children = [];
  } else if ([...htmlTags].includes(elementName) || [...svgTags].includes(elementName)) { // TODO: add support for SVG elements
    node = new VirtualNode('Element', elementName, attributes);
  } else if (typeof elementName === 'object') {
    throw new Error('Object cannot be rendered as JSX node!');
  } else {
    node = new VirtualNode('Text', elementName);
  }

  if (parent) {
    parent.appendChild(node);
  }

  if (!children) {
    children = [];
  }

  children.forEach(childNode => {
    if (!childNode) {
      return;
    }

    if (Array.isArray(childNode)) {
      if (!checkKeysInJsxArray(childNode)) {
        throw new Error(`Dynamically mapped nodes in loop must have unique keys specified in "key" prop.`);
      }

      childNode.forEach(anotherChildNode => {
        buildVirtualTree(anotherChildNode, node);
      });
    } else {
      buildVirtualTree(childNode, node);
    }
  });

  return node;
}

/**
 * Finds closest parent based on selector.
 *
 * @param {VirtualNode} node
 * @param {string} selector
 */
export function findClosestNode(node, selector) {
  if (!selector) {
    throw new Error('A selector can\'t be empty string');
  }

  let currentNode = node;

  while (currentNode?.parent) {
    const parentProps = currentNode.parent.pendingProps ?? EmptyObject;

    if (!currentNode.parent.isType('Element')) {
      currentNode = currentNode.parent;
      continue;
    }

    if (selector.startsWith('#') && parentProps.id === selector.substring(1)) {
      return  currentNode.parent;
    } else if (selector.startsWith('.') && parentProps.class === selector.substring(1)) {
      return currentNode.parent;
    } else if (/[[a-zA-Z0-9\-_]*(?:="[a-zA-Z0-9\-_]*")?]/.test(selector)) {
      const value = selector.replace('[', '').replace(']', '');

      if (currentNode.parent.pendingProps[value]) {
        return currentNode.parent;
      }
    } else if (currentNode.parent.tag === selector) {
      return currentNode.parent;
    }

    currentNode = currentNode.parent;
  }

  return null;
}

/**
 * Finds a virtual node that is found by given component instance.
 *
 * @param {VirtualNode} node
 * @param  {Component} component
 * @returns {VirtualNode|null}
 */
export function findNodeByComponent(node, component) {
  let foundNode = null;

  if (node.instance === component) {
    return node;
  }

  node.children.forEach((child) => {
    foundNode = findNodeByComponent(child, component);
  });

  return foundNode;
}

/**
 * Build virtual tree from root node.
 *
 * @param {SparkJS.RenderResult} renderResult
 */
export function buildVirtualTreeRoot(renderResult) {
  const rootNode = new VirtualNode('Root', '');
  const childNode = buildVirtualTree(renderResult);

  if (childNode) {
    rootNode.appendChild(childNode);
  }

  return rootNode;
}
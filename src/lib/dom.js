import {findClosestNode} from "./virtual-node";
import {diffProps, findClosestDOMNode, resolveClassName, resolveStyle} from "./utils";

/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleAddingProps(node, propName, propValue) {
  if (propName === 'className') {
    propName = 'class';
  }

  if (propName.startsWith('on')) {
    node.addEventListener(propName.substring(2).toLowerCase(), propValue);
    return;
  }

  if (propName === 'class') {
    propValue = resolveClassName(propValue);
  } else if (propName === 'style') {
    propValue = resolveStyle(propValue);
  }

  node.elementRef.setAttribute(propName, propValue);
}

/**
 *
 * @param {VirtualNode} node
 */
function resolveElementAttributes(node) {
  for (let [key, value] of Object.entries(node.pendingProps)) {
    handleAddingProps(node, key, value);
  }
}

/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleUpdatingProps(node, propName, propValue) {
  if (propName === 'className') {
    propName = 'class';
  }

  if (propName.startsWith('on')) {
    const eventName = propName.substring(2).toLowerCase();
    node.removeEventListener(eventName, node.oldProps[eventName]);
    node.addEventListener(eventName, propValue);
  } else if (propName === 'class') {
    propValue = resolveClassName(propValue);
  } else if (propName === 'style') {
    propValue = resolveStyle(propValue);
  }

  if (!propName.startsWith('on')) {
    node.elementRef.setAttribute(propName, propValue);
  }
}

/**
 *
 * @param {VirtualNode} renderNode
 * @param {string} propName
 * @param {any} propValue
 */
function handleRemovingProps(renderNode, propName, propValue) {
  if (propName === 'className') {
    propName = 'class';
  }

  if (propName.startsWith('on')) {
    renderNode.removeEventListener(propName.substring(2).toLowerCase(), propValue);
  } else {
    renderNode.elementRef.removeAttribute(propName);
  }
}

/**
 * Unmount virtual node and it's children.
 * If virtual node represents HTML element it will remove all event listeners and then remove HTML element.
 * If virtual node represents a component instance it will trigger hook for destroying component.
 *
 * @param {VirtualNode} node
 */
export function unmountNode(node) {
  node.children.forEach((child) => {
    unmountNode(child);
  });

  if (node.elementRef) {
    node.cleanListeners();
    node.elementRef.parentNode.removeChild(node.elementRef);
  }

  if (node.isType('Component')) {
    node.instance.destroyed();
  }
}

/**
 * Creates an HTML element or text node in DOM with its arguments.
 *
 * @param {VirtualNode} node
 * @param {number} position
 */
export function createElement(node, position) {
  if (node.isType('Text')) {
    node.elementRef = document.createTextNode(node.tag);
  } else if (node.isType('Element')) {
    const closestWithNS = findClosestNode(node, '[xmlns]');
    const xmlns = node.pendingProps.xmlns ?? closestWithNS?.pendingProps.xmlns ?? '';

    if (xmlns) {
      node.elementRef = document.createElementNS(xmlns, node.tag);
    } else {
      node.elementRef = document.createElement(node.tag);
    }

    resolveElementAttributes(node);
  }

  const parentEl = findClosestDOMNode(node);
  const childAt = parentEl.children[position];

  parentEl.insertBefore(node.elementRef, childAt);
}

/**
 *
 * @param {VirtualNode} node
 */
export function updateElement(node) {
  const diffedProps = diffProps(node.oldProps, node.pendingProps);

  diffedProps.forEach((prop) => {
    if (prop.type === 'Remove' ) {
      handleRemovingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Add' ) {
      handleAddingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Update' ) {
      handleUpdatingProps(node, prop.name, prop.value);
    }
  });
}
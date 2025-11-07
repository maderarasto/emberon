import {buildVirtualTreeRoot, findNodeByComponent} from "@/virtual-node";
import {cleanNodes, reconcile, resolveEffectsFromNodes, resolveLastMountedNode} from "@/reconciler";
import {createElement, unmountNode, updateElement} from "@/dom";

/**
 * Checks if component nodes are ready to trigger hooks for mounting or updating.
 * Which hook to trigger depends on given action.
 *
 * @param {VirtualNode[]} componentNodes
 * @param {'mount'|'update'}action
 */
function processComponentNodes(componentNodes, action = 'mount') {
  if (!['mount', 'update'].includes(action)) {
    action = 'mount';
  }

  while (componentNodes.length > 0) {
    if (action === 'mount' && !componentNodes[0].allChildrenMounted()) {
      break;
    } else if (action === 'update' && !componentNodes[0].allChildrenUpdated()) {
      break;
    }

    if (action === 'mount') {
      componentNodes[0].mounted = true;
      componentNodes[0].instance.mounted();
    } else if (action === 'update') {
      componentNodes[0].instance.updated();
    }

    componentNodes.shift();
  }
}

/**
 * Handles effect for placing a new HTML element or text node.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handlePlacement(effect, componentNodes) {
  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }

  if (effect.nodeRef.isType('Element') || effect.nodeRef.isType('Text')) {
    createElement(effect.nodeRef, effect.position);

    if (effect.nodeRef.ref) {
      effect.nodeRef.ref.current = effect.nodeRef.elementRef;
    }
  }

  processComponentNodes(componentNodes, 'mount');
}

/**
 * Handles effect for updating existing HTML element.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handleUpdate(effect, componentNodes) {
  effect.nodeRef.pendingUpdate = false;

  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }

  if (effect.nodeRef.isType('Element')) {
    updateElement(effect.nodeRef);
  }

  processComponentNodes(componentNodes, 'update');
}

export class Spark {
  constructor() {
    /** @type {HTMLElement} */
    this._rootEl = null;
    /** @type {SparkJS.RenderCallback} */
    this._rootFunc = null;
    /** @type {VirtualNode} */
    this._virtualTree = null;
  }

  /**
   * Sets a function that return JSX structure.
   *
   * @param {() => SparkJS.RenderResult} rootFn
   */
  setRootFunction(rootFn) {
    this._rootFunc = rootFn;
  }

  /**
   * Mounts application to HTML element and trigger render.
   * It throws error if root element isn't found.
   *
   * @param {HTMLElement|string} mountEl
   */
  mount(mountEl) {
    if (typeof mountEl === 'string') {
      this._rootEl = document.querySelector(mountEl);
    } else {
      this._rootEl = mountEl;
    }

    if (!(this._rootEl instanceof HTMLElement)) {
      throw new Error('Could not find a root element');
    }

    this.render();
  }

  render() {
    if (!this._rootEl) {
      throw new Error('Could not find a root element');
    }

    const renderResult = this._rootFunc();
    const newVirtualTree = buildVirtualTreeRoot(renderResult);

    reconcile(this._virtualTree, newVirtualTree);

    const deletions = resolveEffectsFromNodes(this._virtualTree);
    const newChanges = resolveEffectsFromNodes(newVirtualTree);

    deletions.forEach((effect) => {
      if (effect.type === 'Deletion') {
        unmountNode(effect.nodeRef);
      }
    });

    this._virtualTree = newVirtualTree;
    this._virtualTree.elementRef = this._rootEl;

    /** @type {VirtualNode[]} */
    const mountedComponentNodes = [];
    /** @type {VirtualNode[]} */
    const updatedComponentNodes = [];

    newChanges.forEach((effect) => {
      if (effect.type === 'Placement') {
        handlePlacement(effect, mountedComponentNodes);
      } else if (effect.type === 'Update') {
        handleUpdate(effect, updatedComponentNodes);
      }
    });

    cleanNodes(this._virtualTree);
  }

  /**
   *
   * @param {Component} component
   */
  onStateChanged(component) {
    const foundNode = findNodeByComponent(this._virtualTree, component);

    if (!foundNode) {
      console.warn('Skipping render. A render node not found for component: ' + component.constructor.name);
      return;
    }

    // Request to re-render application.
    foundNode.stateChanged = true;
    foundNode.state = component.state;
    this.render();
  }
}

export function createRef(value) {
  const lastMountedNode = resolveLastMountedNode();

  if (!lastMountedNode) {
    console.warn('Skipping createRef. Last mounted virtual node not found. Cause: probably calling createRef outside of constructor.');
    return;
  }

  const ref = {
    current: value
  }

  lastMountedNode.refs.push(ref);
  return ref;
}
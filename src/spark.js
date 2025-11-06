import Component from './component';
import {buildVirtualTreeRoot} from "@/virtual-node";
import {reconcile} from "@/reconciler";

export class Spark {
  constructor() {
    /** @type {HTMLElement} */
    this._rootEl = null;
    /** @type {SparkJS.RenderCallback} */
    this._rootFunc = null;
    /** @type {} */
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
    console.log(newVirtualTree);
    // TODO: resolve effects in both trees
    // TODO: handle deletion effects
    // TODO: store new virtual tree as current virtual tree
    // TODO: handle placement and update effects
    // TODO: clean all effects
  }

  /**
   *
   * @param {Component} component
   */
  onStateChanged(component) {

  }
}
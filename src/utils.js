export const EmptyObject = {};

/**
 * Flatten children of render result if any of them is type of array.
 *
 * @param {SparkJS.RenderResult} renderResult
 * @returns {SparkJS.RenderResult}
 */
export function flattenRenderResultChildren(renderResult) {
  if (typeof renderResult === 'string') {
    return renderResult;
  }

  /** @type {RenderResult[]} */
  let children = [];
  renderResult.children.forEach(child => {
    if (!Array.isArray(child)) {
      children.push(child);
      return;
    }

    children = [
      ...children,
      ...child,
    ];
  });

  return {
    ...renderResult,
    children,
  }
}
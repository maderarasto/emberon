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

export function resolveClassName(value) {
  if (typeof value !== 'object') {
    return value.toString();
  }

  let classTokens = !Array.isArray(value) ? Object.keys(value).filter((className) => {
    return value[className];
  }) : value;

  classTokens = classTokens.filter((className, index, tokens) => {
    return tokens.indexOf(className) === index;
  });

  return classTokens.join(' ');
}

export function resolveStyle(value) {
  if (Array.isArray(value)) {
    throw new Error('Style cannot be use as array!');
  }

  if (typeof value !== 'object') {
    return value.toString();
  }

  return Object.entries(value).map(([key, value]) => {
    if (/^[a-z]*[A-Z]/.test(key)) {
      const keyTokens = key.split(/(?=[A-Z])/).map((token) => {
        return token.toLowerCase();
      });

      key = keyTokens.join('-');
    }

    return `${key}: ${value}`;
  }).join('; ');
}

/**
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 * @returns {SparkJS.PropsDiff[]}
 */
export function diffProps(oldProps, pendingProps) {
  /** @type {SparkJS.PropsDiff[]} */
  const propDiffs = [];

  for (const [key, value] of Object.entries(pendingProps)) {
    if (oldProps[key] === undefined || oldProps[key] === null) {
      propDiffs.push({ type: 'Add', name: key, value });
    } else if (value !== oldProps[key]) {
      propDiffs.push({ type: 'Update', name: key, value, });
    }
  }

  for (const [key, value] of Object.entries(oldProps)) {
    if (pendingProps[key] === undefined || pendingProps[key] === null) {
      propDiffs.push({ type: 'Remove', name: key, value });
    }
  }

  return propDiffs;
}

/**
 *
 * @param {VirtualNode} node
 */
export function findClosestDOMNode(node) {
  let currentNode = node;

  while (currentNode && currentNode.parent) {
    if (currentNode.parent.elementRef) {
      return currentNode.parent.elementRef;
    }

    currentNode = currentNode.parent;
  }

  return null;
}
module.exports = function removeJsxComments({ types }) {
  return {
    name: 'remove-jsx-comments',
    visitor: {
      JSXElement(path) {
        console.log(path);
        path.node.children = path.node.children.filter((child) => {
          return !(
            types.isJSXExpressionContainer(child) &&
            types.isJSXEmptyExpression(child.expression)
          );
        })
      }
    }
  }
}
const TreeUtility = {}

TreeUtility.init = function(collection) {
  this._collection = collection
}

TreeUtility.populateTreeIds = function (tree) {
  this._collection[0] = tree
  var startId = 1

  this._walk(tree.children, function(node, parent) {
    node.id = startId

    if (parent) {
      node.parent_id = parent.id;
    } else {
      node.parent_id = 0
    }

    collection[startId] = node
    startId++

    return node
  })

  return tree
}

TreeUtility._walk = function(tree, fn, parent) {
  tree.forEach(function(node) {
    var node = fn(node, parent)

    if(node.children) {
      this._walk(node.children, fn, node);
    } else {
      node.children = [];
    }
  })
}

export default TreeUtility

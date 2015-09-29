import React, { Component } from 'react'
import StateView from './StateView'
import SortableNestedList from './SortableNestedList.jsx'
import DragAccessor from './DragAccessor'

class Sortable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: populateTreeIds(props.data)
    }

    this.update = this.update.bind(this)
    this.sort = this.sort.bind(this)
  }

  update () {
    var data = this.props.data
    data.dragging = DragAccessor.from
    this.setState({data: data})
  }

  sort () {
    if (DragAccessor.from !== DragAccessor.to) {
      var node = _remove(DragAccessor.from)

      if (DragAccessor.placement === 'before') {
        _insertBefore(node, DragAccessor.to)
      } else if (DragAccessor.placement === 'after') {
        _insertAfter(node, DragAccessor.to)
      } else if (DragAccessor.placement === 'append') {
        _prepend(node, DragAccessor.to)
      }
    }

    this.update()
  }

  render () {
    return (
      <div>
        <SortableNestedList data={this.state.data} sort={this.sort} />
        <StateView data={this.state.data} />
      </div>
    )
  }
}

export default Sortable

var collection = {}

// Removes a node from collection
// returns the node itself
function _remove (id) {
  // console.log("_remove ID", id);
  // Get the node we're moving
  let node = collection[id]
  // console.log(node);
  // console.log('');

  let index = collection[node.parent_id].children.indexOf(node)
  // Remove node from it's current position
  collection[node.parent_id].children.splice(index, 1)
  return node
}

// Inserts a node before another
// node and updates it's parent
// references
function _insertBefore (node, dest) {
  // Get parent of the node we're inserting before
  let to = collection[dest].parent_id
  // Find index of node we're inserting before
  let index = collection[to].children.indexOf(collection[dest])
  _insert(node, to, index)
}

// Inserts a node after another
// node and updates it's parent
// references
function _insertAfter (node, dest) {
  // Get parent of the node we're inserting before
  let to = collection[dest].parent_id
  // Find index of node we're inserting before
  let index = collection[to].children.indexOf(collection[dest])
  _insert(node, to, index + 1)
}

// Inserts node at new location
// called internally by _insertBefore
// and _insertAfter
function _insert (node, to, index) {
  // Update parent reference
  node.parent_id = to
  // Insert at new location
  collection[to].children.splice(index, 0, node)
}

// Prepend node as first child
function _prepend (node, dest) {
  _insert(node, dest, 0)
}

function populateTreeIds (tree) {
  collection[0] = tree
  let startId = 1

  walk(tree.children, function (node, parent) {
    node.id = startId

    if (parent) {
      node.parent_id = parent.id
    } else {
      node.parent_id = 0
    }

    collection[startId] = node
    startId++

    return node
  })

  return tree
}

function walk (tree, fn, parent) {
  tree.forEach(function (node) {
    node = fn(node, parent)

    if (node.children) {
      walk(node.children, fn, node)
    } else {
      node.children = []
    }
  })
}

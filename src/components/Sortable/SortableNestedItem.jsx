import React, { Component, PropTypes } from 'react'
import DragAccessor from './DragAccessor'

class SortableNestedItem extends Component {
  constructor (props) {
    super(props)

    this.dragEnd = this.dragEnd.bind(this)
    this.dragOver = this.dragOver.bind(this)
    this.dragStart = this.dragStart.bind(this)
  }

  dragStart (e) {
    this.dragged = e.currentTarget.dataset.id
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', null)
  }

  handleDrop (e) {
    e.preventDefault()
    this.props.sort(undefined, undefined)
  }

  dragEnd (e) {
    e.stopPropagation()
    e.preventDefault()
    this.props.sort(undefined, undefined)
  }

  move (over, placement) {
    var to = Number(over.dataset.id)
    var from = DragAccessor.getId() || Number(this.dragged)
    this.props.sort(to, from, placement)
  }

  dragOver (e) {
    e.stopPropagation()
    e.preventDefault()
    var over = e.currentTarget
    var relY = e.clientY - over.getBoundingClientRect().top
    var height = over.offsetHeight / 2

    var relX = e.clientY - over.getBoundingClientRect().left
    var width = over.offsetWidth / 2

    var placement
    if (relX > width) {
      placement = 'append'
    } else if (relY > height) {
      placement = 'after'
    } else if (relY < height) {
      placement = 'before'
    }

    this.move(over, placement)
  }

  getClassName () {
    return this.props.data.id == DragAccessor.getId() ? 'dragging' : ''
  }

  render () {
    if (this.props.data.children) {
      var listItems = this.props.data.children.map((item) => {
        return (
          <SortableNestedItem {...this.props} sort={this.props.sort} data={item} data-id={item.id} />
        )
      }, this)
    }

    return (
      <li style={this.props.style}
        draggable={true}
        onDragEnd={this.dragEnd}
        onDragOver={this.dragOver}
        onDragStart={this.dragStart} data-id={this.props.data.id}>
        {this.props.data.module}
        <ul>{ listItems } </ul>
      </li>
    )
  }
}

export default SortableNestedItem

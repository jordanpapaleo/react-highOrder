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
    e.stopPropagation()
    this.dragged = e.currentTarget.dataset.id
    DragAccessor.from = Number(this.dragged)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', null)
  }

  dragEnd (e) {
    e.stopPropagation()
    e.preventDefault()

    this.props.sort()
  }

  dragOver (e) {
    e.stopPropagation()
    e.preventDefault()
    var over = e.currentTarget
    var relY = e.clientY - over.getBoundingClientRect().top
    var height = over.offsetHeight / 2

    var relX = e.clientY - over.getBoundingClientRect().left
    var width = over.offsetWidth / 2

    if (relX > width) {
      DragAccessor.placement = 'append'
    } else if (relY > height) {
      DragAccessor.placement = 'after'
    } else if (relY < height) {
      DragAccessor.placement = 'before'
    }

    DragAccessor.to = Number(over.dataset.id)
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
        {this.props.data.module + ' - ' + this.props.data.id}
        <ul>{ listItems } </ul>
      </li>
    )
  }
}

export default SortableNestedItem

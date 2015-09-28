import React, { Component } from 'react'
import SortableNestedItem from './SortableNestedItem'

class SortableNestedList extends Component {
  render () {
    var listItems = this.props.data.children.map(function(item, i) {
      return (
        <SortableNestedItem sort={this.props.sort} data={item} key={item.id} />
      )
    }, this)

    return (
      <ul id='top'>{listItems}</ul>
    )
  }
}

export default SortableNestedList

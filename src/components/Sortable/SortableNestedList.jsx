import React, { Component } from 'react'
import SortableNestedItem from './SortableNestedItem'

class SortableNestedList extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    var listItems = this.props.data.children.map(function(item, i) {
      // console.log('ITEM', item.id)

      return (
        <SortableNestedItem sort={this.props.sort} data={item} data-id={item.id} />
      )
    }, this)

    return (
      <ul id='top'>{listItems}</ul>
    )
  }
}

export default SortableNestedList

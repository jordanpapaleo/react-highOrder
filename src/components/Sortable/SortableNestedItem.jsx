import React, { Component } from 'react'
import SortableNested from './SortableNested'

class SortableNestedItem extends Component {
  constructor (props) {
    super(props)
    //Hast a sort() passed from grandparent
  }

  render () {
    if (this.props.data.children) {
      var listItems = this.props.data.children.map((item) => {
        return (
          <SortableNestedItem sort={this.props.sort} data={item} key={item.id} />
        )
      }, this)
    }

    return (
      <li style={this.props.style}>
        {this.props.data.module}
        <ul>{ listItems } </ul>
      </li>
    )
  }
}

var blar = SortableNested(SortableNestedItem)

console.log('SortableNestedItem', new blar())

export default SortableNested(SortableNestedItem)
// export default SortableNestedItem

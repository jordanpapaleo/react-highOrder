import React, { PropTypes } from 'react'
import { ItemTypes } from './Constants'
import { DragSource } from 'react-dnd'

class Child extends React.Component {
  static get propTypes () {
    return {
      index: PropTypes.number,
      connectDragSource: PropTypes.func.isRequired,
      isDragging: PropTypes.bool.isRequired
    }
  }

  static get defaultProps () {
    return {
      plop: 'blar'
    }
  }

  constructor (props) {
    super(props)
    console.log('PROPS', props)
    this.renderSuperChild = this.renderSuperChild.bind(this)
  }

  render () {
    const { connectDragSource } = this.props

    console.log('Child', this)

    return connectDragSource(
      <ul className='children'>
        { (this.props.kids) ? this.props.kids.map((kid, i) =>
          <li>
            { this.renderSuperChild() }
          </li>
        ) : '' }
      </ul>
    )
  }

  renderSuperChild () {
    // I need the exported child to render
    return React.createElement(DragSource(ItemTypes.CHILD, {
      beginDrag: function (props) {
        return {}
      }
    }, (connect, monitor) => {
      return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      }
    })(Child))
  }
}

const SuperChild = DragSource(ItemTypes.CHILD, {
  beginDrag: function (props) {
    return {}
  }
}, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
})(Child)

export default SuperChild

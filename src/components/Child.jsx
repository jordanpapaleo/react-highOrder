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

  constructor (props) {
    super(props)

    console.log('PROPS', props)

    this.state = {
      children: [0, 1, 2, 3, 4]
    }
  }

  render () {
    const { connectDragSource } = this.props

    return connectDragSource(
      <ul className='children'>
        { this.state.children.map((child, i) =>
          <li key={child}>
            <Child index={i} ref={'child/' + i} />
          </li>
        ) }
      </ul>
    )
  }
}

// Second parameter in DragSource
const taskSource = {
  beginDrag (props) {
    return {
      index: props.index
    }
  }
}

// Third parameter in DragSource
function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default DragSource(ItemTypes.CHILD, taskSource, collect)(Child)

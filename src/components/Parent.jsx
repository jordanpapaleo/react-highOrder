import React from 'react'
import Child from './Child'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'

class Parent extends React.Component {
  render () {
    return (
      <Child />
    )
  }
}

export default DragDropContext(HTML5Backend)(Parent)

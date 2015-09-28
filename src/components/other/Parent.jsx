import React from 'react'
import Child from './Child'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'

class Parent extends React.Component {
  render () {
    const kids = [0, 1, 2, 3, 4]

    return (
      <Child kids={kids} />
    )
  }
}

export default DragDropContext(HTML5Backend)(Parent)

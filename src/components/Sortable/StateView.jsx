import React, { Component } from 'react'

class StateView extends Component {
  render () {
    return (
      <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
    )
  }
}

export default StateView

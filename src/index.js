import 'normalize.css'
import './main.css'

import debug from 'debug'
import React from 'react'
// import Parent from './components/Parent'
import Sortable from './components/Sortable'
import data from './components/Sortable/data'


const log = debug('application:bootstrap')

if (process.env.NODE_ENV !== 'production') {
  debug.enable('application:*')
}

log('creating application node')
const applicationNode = document.createElement('div')
applicationNode.className = 'application'
applicationNode.id = 'application'

log('adding application node to body')
document.body.appendChild(applicationNode)

log('mounting application')

React.render(<Sortable data={data} />, applicationNode, () => {
  log('finished mounting application')
})

/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import ReactDOM from 'react-dom'
import 'babel-polyfill'
import 'assets/css/index.css'

import Hello from 'src/components/Test'

ReactDOM.render(
  <Hello/>,
  document.querySelector('#app')
)

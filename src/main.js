import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import 'assets/css/index.css'

import Hello from 'src/components/Test'

ReactDOM.render(
  <Hello/>,
  document.querySelector('#app')
)
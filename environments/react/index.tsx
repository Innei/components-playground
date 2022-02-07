import '@components/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterLayout } from './layout/router-layout'

const App = () => {
  return <RouterLayout />
}

ReactDOM.render(<App />, document.getElementById('app')!)

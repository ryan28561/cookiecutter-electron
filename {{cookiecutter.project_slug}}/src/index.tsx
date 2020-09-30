import React, { Component } from 'react'
import { render } from 'react-dom'

import './scss/index.scss'

const App: React.FC<{}> = () => {
  return <div><h1>You did it!</h1></div>
}

render(<App />, document.getElementById("app"))

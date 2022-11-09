import React from 'react'
import logo from './images/logo.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt="logo" className="logo"></img>
        <h1>Age Converter</h1>
      </div>
      <div className="container">
        <div className="form">
          <h2>Birthday</h2>
          <input type="date" id="birthday" name="birthday"></input>
          <button>Convert</button>
        </div>
      </div>
      <div className="footer">
        <h3>Created by</h3>
        <p><i>Amy Martin | Joe Owen</i></p>
      </div>
    </div>
  )
}

export default App
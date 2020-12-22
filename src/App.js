import React, { Component } from 'react'
import Main from './components/Main'
import Social from './components/Social'
import './css/social.css'
import './css/main.css'
import './css/timer.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="componentContainer">
          <Main />
          <Social />
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

export default App;

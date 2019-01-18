import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'

import Characters from './components/Characters'
import Locations from './components/Locations'
import Episodes from './components/Episodes'

class App extends Component {
    state = {
      desiredContent: ''
    }

  handleButtonClick = (e) => {
    this.setState({desiredContent:e.target.innerHTML})
  }

  Display = () => {
    switch(this.state.desiredContent){
      case "Characters":
        return <Characters />;
      case "Locations":
        return <Locations />;
        case "Episodes":
          return <Episodes />;
        default:
          return null;
    }
  }

  render() {
    return (
      <div className="App">
        <Home handleButtonClick={this.handleButtonClick} />
        <h1>{this.state.desiredContent}</h1>
        {this.Display()}
      </div>
    )
  }
}

export default App;

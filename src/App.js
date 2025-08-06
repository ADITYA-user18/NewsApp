import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css'




export class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: true
    };
  }


 

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newMode = !prevState.darkMode;
      document.body.style.backgroundColor = newMode ? '#121212' : 'white';
      document.body.style.color = newMode ? 'white' : 'black';
      return { darkMode: newMode };
    });
  };

  render() {
    return (
      <div>
        <Navbar darkMode={this.state.darkMode} toggleMode={this.toggleDarkMode} />
        <News darkMode={this.state.darkMode} />
      </div>
    );
  }
}

export default App;

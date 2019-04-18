import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Sprite} from './common/Sprite';
import sheet from './res/sheet.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Sprite({
          filename: sheet,
          x: 156,
          y: 115,
          width: 17,
          height: 12
        })}
      </div>
    );
  }
}

export default App;

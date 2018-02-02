import React, { Component } from 'react';
import './App.css';
import {
  Header,
  MoviesBox
} from './components';

class App extends Component {
  render() {
    return (
      <div className="movies-app">
        <Header />
        <MoviesBox />
      </div>
    );
  }
}

export default App;

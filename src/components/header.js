import React, { Component } from 'react';
import logo from '../images/logo-moviedb.png';

export class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-dark bg-dark">
        <h1>
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Movies App" />
            Movies App
          </a>
        </h1>
      </header>
    );
  }

}

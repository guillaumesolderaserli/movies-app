import React, { Component } from 'react';
import logo from '../images/logo-moviedb.png';

export class Header extends Component {

  movieLink = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <h1>
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Movies App" />
            Movies App
          </a>
        </h1>
        <ol className="breadcrumb">
          <li className={`breadcrumb-item${this.props.genre ? '' : ' active'}`}>
            <a href="#" onClick={this.props.homeLink}>Genres</a>
          </li>
          {this.props.genre &&
            <li className={`breadcrumb-item${this.props.movie ? '' : ' active'}`} aria-current="page">
              <a href="#" onClick={this.props.genreLink}>{this.props.genre.name}</a>
            </li>
          }
          {this.props.movie &&
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#" onClick={this.movieLink}>{this.props.movie.title}</a>
            </li>
          }
        </ol>
        {
          /*
          <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          */
        }
      </nav>
    );
  }

}

import React, { Component, Fragment } from 'react';

export class Movies extends Component {

  render() {
    return (
      <Fragment>
        {this.props.movies.length > 0 && <h3 className="text-center">Films</h3>}
        <ul className="list-group">
        {
          this.props.movies.map(movie => {
            const activeClass = this.props.selected === movie.id ? ' active' : ''
            return (
                <li
                  key={movie.id}
                  className={`list-group-item d-flex justify-content-between align-items-center${activeClass}`}
                  onClick={e => this.props.onSelect(movie.id)}
                >
                  {movie.title}
                  <span className="badge-pill">{movie.release_date}</span>
                </li>
            )
          })
        }
        </ul>
      </Fragment>
    );
  }

}

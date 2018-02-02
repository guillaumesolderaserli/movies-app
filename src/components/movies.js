import React, { Component, Fragment } from 'react';

export class Movies extends Component {

  next = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.next();
    e.target.blur();
  }

  previous = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.next();
    e.target.blur();
  }

  render() {
    if (this.props.movies === undefined) {
      return <noscript />
    }
    return (
      <Fragment>
        {this.props.movies.results.length > 0 && (
          <h3 className="text-center">
            {this.props.movies.total_results} films &quot;{this.props.genre.name}&quot;
          </h3>
        )}
        <ul className="list-group">
        {
          this.props.movies.results.map(movie => {
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
        <div className="container">
          <div className="row movies-pagination">
            <div className="col-sm-4 text-center">
            { this.props.movies.page > 1 && <a className="page-link" href="#" onClick={this.previous}>&lt; Pr&eacute;c&eacute;dent</a>}
            </div>
            <div className="col-sm-4 text-center">
              <span className="page-link">
                Page {this.props.movies.page} / {this.props.movies.total_pages}
              </span>
            </div>
            <div className="col-sm-4 text-center">
            { this.props.movies.page < this.props.movies.total_pages && <a className="page-link" href="#" onClick={this.next}>Suivant &gt;</a> }
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

}

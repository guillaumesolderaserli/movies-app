import React, { Component, Fragment } from 'react';

export class Movie extends Component {

  render() {
    return (
      <Fragment>
        {
          this.props.movie && <h3 className="text-center">Détail</h3>
        }
        {
          this.props.movie &&
          (<div className="movie card">
            <img className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
              alt={this.props.movie.title} />
            <div className="card-body">
              <h5 className="card-title">{this.props.movie.title}</h5>
              <p className="card-text">{this.props.movie.overview}</p>
            </div>
          </div>)
        }
      </Fragment>
    );
  }

}

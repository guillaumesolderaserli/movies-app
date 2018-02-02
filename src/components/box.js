import React, { Component } from 'react';
import {
  Genres,
  Movies,
  Movie
} from './index'
import {
  fetchGenres,
  fetchMovies,
  fetchMovie
} from '../services';

export class MoviesBox extends Component {

  state = {
    genres: [],
    selectedGenre: undefined,
    movies: [],
    selectedMovie: undefined,
    movie: undefined,
  }

  componentDidMount() {
    fetchGenres()
    .then(genres => {
      this.setState({
        genres
      })
    })
  }

  onGenreSelect = (genreId) => {
    fetchMovies(genreId)
    .then(movies => {
      this.setState({
        movies,
        selectedGenre: genreId,
        movie: undefined,
        selectedMovie: undefined
      })
    })
  }

  onMovieSelect = (movieId) => {
    fetchMovie(movieId)
    .then(movie => {
      this.setState({
        movie,
        selectedMovie: movieId
      })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <Genres genres={this.state.genres} selected={this.state.selectedGenre} onSelect={this.onGenreSelect}/>
          </div>
          <div className="col-sm-12 col-lg-4">
            <Movies movies={this.state.movies}  selected={this.state.selectedMovie} onSelect={this.onMovieSelect}/>
          </div>
          <div className="col-sm-12 col-lg-4">
            <Movie movie={this.state.movie}/>
          </div>
        </div>
      </div>
    );
  }

}

import React, { Component } from 'react';
import './App.css';

import {
  fetchGenres,
  fetchMovies,
  fetchMovie
} from './services';

import {
  Header,
  Genres,
  Movies,
  Movie
} from './components';

class App extends Component {

  state = {
    genres: undefined,
    genre: undefined,
    movies: undefined,
    movie: undefined,
    page: 'genres'
  }

  componentDidMount() {
    fetchGenres()
    .then(genres => {
      this.setState({
        genres
      })
    })
  }

  onGenreSelect = (genre) => {
    fetchMovies(genre.id, 1)
    .then(data => {
      this.setState({
        movies: data,
        genre: genre,
        movie: undefined,
        page:'movies',
      })
    })
  }

  onMovieSelect = (movieId) => {
    fetchMovie(movieId)
    .then(movie => {
      this.setState({
        movie,
        page: 'movie'
      })
    })
  }

  onHomeLink = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      page: 'genres',
      movies: undefined,
      movie: undefined,
      genre: undefined
    })
  }

  onGenreLink = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      page: 'movies',
      movie: undefined
    })
  }

  previousPage = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    fetchMovies(this.state.genre.id, this.state.movies.page - 1)
    .then(data => {
      this.setState({
        movies: data,
        movie: undefined,
        selectedMovie: undefined
      })
    })
  }

  nextPage = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    fetchMovies(this.state.genre.id, this.state.movies.page + 1)
    .then(data => {
      this.setState({
        movies: data,
        movie: undefined,
      })
    })
  }

  render() {
    return (
      <div className={`movies-app ${this.state.page}`}>
        <Header homeLink={this.onHomeLink} genreLink={this.onGenreLink} genre={this.state.genre} movie={this.state.movie}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-4 genres-container">
              <Genres genres={this.state.genres} selected={this.state.genre} onSelect={this.onGenreSelect}/>
            </div>
            <div className="col-sm-12 col-lg-4 movies-container">
              <Movies genre={this.state.genre} movies={this.state.movies} previous={this.previousPage} next={this.nextPage} selected={this.state.movie ? this.state.movie.id : undefined} onSelect={this.onMovieSelect}/>
            </div>
            <div className="col-sm-12 col-lg-4 movie-container">
              <Movie movie={this.state.movie}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

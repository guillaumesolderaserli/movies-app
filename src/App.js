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
    genres: [],
    selectedGenre: undefined,
    movies: undefined,
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

  onGenreSelect = (genre) => {
    fetchMovies(genre.id, 1)
    .then(data => {
      this.setState({
        movies: data,
        selectedGenre: genre,
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

  previousPage = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    fetchMovies(this.state.selectedGenre.id, this.state.movies.page - 1)
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
    fetchMovies(this.state.selectedGenre.id, this.state.movies.page + 1)
    .then(data => {
      this.setState({
        movies: data,
        movie: undefined,
        selectedMovie: undefined
      })
    })
  }

  render() {
    return (
      <div className="movies-app">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <Genres genres={this.state.genres} selected={this.state.selectedGenre} onSelect={this.onGenreSelect}/>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Movies genre={this.state.selectedGenre} movies={this.state.movies} previous={this.previousPage} next={this.nextPage} selected={this.state.selectedMovie} onSelect={this.onMovieSelect}/>
            </div>
            <div className="col-sm-12 col-lg-4">
              <Movie movie={this.state.movie}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

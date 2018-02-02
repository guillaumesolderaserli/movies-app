const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY

export function fetchGenres() {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`)
  .then(res => res.json())
  .then(data => data.genres)
}

export function fetchMovies(genreId, page) {
  return fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`)
  .then(res => res.json())
}

export function fetchMovie(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`)
  .then(res => res.json())
}

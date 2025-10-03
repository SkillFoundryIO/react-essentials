import { Link, useSearchParams } from 'react-router-dom'
import { movies } from '../data/movies'

function MovieList() {
  // get a collection of querystring parameters
  const [searchParams] = useSearchParams();
  // get a specific search parameter
  const directorFilter = searchParams.get('director');

  // by default, display all movies
  let filteredMovies = movies;

  // if present, filter
  if (directorFilter) {
    filteredMovies = movies
      .filter(movie =>
        movie.director.toLowerCase() === directorFilter.toLowerCase());
  }

  return (
    <div>
      <h1>Movies</h1>
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Title</th>
                <th>Release Year</th>
                <th>Director</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {filteredMovies.map(movie => (
            <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td><Link to={`/movies/${movie.id}`}>View Details</Link></td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
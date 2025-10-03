import { Link } from 'react-router-dom'
import { movies } from '../data/movies'

function MovieList() {
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
            {movies.map(movie => (
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
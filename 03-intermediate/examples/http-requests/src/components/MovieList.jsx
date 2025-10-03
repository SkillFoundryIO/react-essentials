import { useState, useEffect } from 'react';
import { getMovies } from '../services/movieService';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []); 

  async function loadMovies() {
    try {
      setLoading(true);
      setError(null);
      const data = await getMovies();
      setMovies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Conditional rendering based on state
  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error}</div>;
  if (movies.length === 0) return <div>No movies found</div>;

  return (
    <div>
      <h2>Movie Collection</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
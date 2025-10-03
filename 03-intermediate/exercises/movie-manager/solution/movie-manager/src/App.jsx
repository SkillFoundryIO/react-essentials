import { useState, useEffect } from 'react';
import { getMovies, deleteMovie } from './services/movieService';
import EditMovieModal from './components/EditMovieModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  // Load movies on component mount
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const moviesData = await getMovies();
      setMovies(moviesData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setCurrentMovie(null);
    setShowModal(true);
  };

  const handleEdit = (movie) => {
    setCurrentMovie(movie);
    setShowModal(true);
  };

  const handleDelete = async (movie) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${movie.title}"?`
    );
    
    if (confirmed) {
      try {
        await deleteMovie(movie.id);
        await loadMovies(); // Reload the movies list
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentMovie(null);
  };

  const handleMovieSaved = () => {
    setShowModal(false);
    setCurrentMovie(null);
    loadMovies(); // Reload the movies list
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Movies</h1>
        <button 
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Add Movie
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No movies found
                </td>
              </tr>
            ) : (
              movies.map(movie => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                  <td>{movie.director}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(movie)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <EditMovieModal
        show={showModal}
        movie={currentMovie}
        onClose={handleModalClose}
        onSave={handleMovieSaved}
      />
    </div>
  );
}

export default App

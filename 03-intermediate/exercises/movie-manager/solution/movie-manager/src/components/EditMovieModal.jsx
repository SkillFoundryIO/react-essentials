import { useState, useEffect } from 'react';
import { createMovie, updateMovie } from '../services/movieService';

const EditMovieModal = ({ show, movie, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    director: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Reset form when modal opens/closes or movie changes
  useEffect(() => {
    if (show) {
      if (movie) {
        // Edit mode - populate form with movie data
        setFormData({
          title: movie.title,
          year: movie.year,
          director: movie.director
        });
      } else {
        // Add mode - clear form
        setFormData({
          title: '',
          year: '',
          director: ''
        });
      }
      setError(null);
    }
  }, [show, movie]);

  async function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.year || !formData.director) {
      setError('All fields are required');
      return;
    }

    // simple year validation
    if (isNaN(formData.year) || formData.year > new Date().getFullYear() + 10 || formData.year < 1900) {
      setError('Please enter a valid year');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const movieData = {
        title: formData.title.trim(),
        year: parseInt(formData.year),
        director: formData.director.trim()
      };

      if (movie) {
        // Update existing movie
        await updateMovie(movie.id, movieData);
      } else {
        // Create new movie
        await createMovie(movieData);
      }

      onSave();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {movie ? 'Edit Movie' : 'Add New Movie'}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                disabled={loading}
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="year" className="form-label">
                    Year *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    disabled={loading}
                    min="1900"
                    max={new Date().getFullYear() + 10}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="director" className="form-label">
                    Director *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="director"
                    name="director"
                    value={formData.director}
                    onChange={handleInputChange}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      {movie ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    movie ? 'Update Movie' : 'Create Movie'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMovieModal;
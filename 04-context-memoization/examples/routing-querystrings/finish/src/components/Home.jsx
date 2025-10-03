import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieDirectors } from "../data/movies"

function Home() {
  // state for the dropdown
  const [selectedDirector, setSelectedDirector] = useState('');

  // unique list of director names
  const directors = getMovieDirectors();

  // object for programmatic navigation
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // prevent form submission

    // if "all" is selected, just navigate to the normal route
    if (!selectedDirector) {
      navigate('/movies');
      return;
    }

    // navigate to the movie list with the selected director in the query string
    navigate(`/movies?director=${encodeURIComponent(selectedDirector)}`);
  }
  
  return (
    <>
      <h1>Welcome to Nerdy Movies</h1>
      <p className="lead mb-4">
        This is a demo application showing React Router in action.
      </p>
      <h2 className="mb-4">Filter By Director</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-auto mb-4">
          <label className="form-label">Select Director:</label>
          <select className="form-select"
            value={selectedDirector}
            onChange={(e) => setSelectedDirector(e.target.value)}
          >
            <option value="">- All Directors -</option>
            {directors.map(director => (
              <option key={director} value={director}>{director}</option>
            ))}
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Show Movies
          </button>
        </div>
      </form>
    </>
  )
}

export default Home
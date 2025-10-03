import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';

export default function MovieDetails() {
    // Get the id parameter from the URL
    const { id } = useParams();
    
    // Safely parse the id parameter
    let movieId;
    try {
        movieId = parseInt(id);
        // Check if the parsed result is actually a number
        if (isNaN(movieId)) {
            throw new Error('Invalid ID format');
        }
    } catch (error) {
        return (
            <div className="alert alert-danger">
                <h4>Invalid Movie ID</h4>
                <p>The movie ID "{id}" is not in a valid format. Please provide a numeric ID.</p>
                <Link to="/movies" className="btn btn-primary">
                    Back to Movie List
                </Link>
            </div>
        );
    }

    // get the movie with validated id
    const movie = movies.find(m => m.id === movieId);

    // Handle case where movie isn't found
    if (!movie) {
        return (
            <div className="alert alert-danger">
                <h4>Error</h4>
                <p>Sorry, we couldn't find a movie with ID: {id}</p>
                <Link to="/movies" className="btn btn-primary">
                    Back to Movie List
                </Link>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>{movie.title}</h2>
            </div>
            <div className="card-body">
                <h5>Released: {movie.year}</h5>
                <h5>Director: {movie.director}</h5>
                
                <h5 className="mt-4">Cast:</h5>
                <ul className="list-group">
                    {movie.cast.map(member => (
                        <li 
                            key={`${member.actor}-${member.role}`} 
                            className="list-group-item"
                        >
                            {member.actor} as {member.role}
                        </li>
                    ))}
                </ul>

                <Link 
                    to="/movies" 
                    className="btn btn-primary mt-3"
                >
                    Back to Movie List
                </Link>
            </div>
        </div>
    );
}
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="alert alert-warning">
            <h4>Page Not Found</h4>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">
                Return Home
            </Link>
        </div>
    );
}

export default NotFound
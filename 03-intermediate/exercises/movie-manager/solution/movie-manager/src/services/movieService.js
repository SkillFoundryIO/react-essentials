const BASE_URL = "http://localhost:3001/api";

// Helper function to handle response errors
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || 
      `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};

// Get all movies
export async function getMovies() {
  const response = await fetch(`${BASE_URL}/movies`);
  return handleResponse(response);
}

// Get a movie by ID
export async function getMovie(id) {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  return handleResponse(response);
}

// Add new movie
export async function createMovie(movieData) {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
  return handleResponse(response);
};

// Update existing movie
export async function updateMovie(id, movieData) {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
  return handleResponse(response);
};

// Delete movie
export async function deleteMovie(id) {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};


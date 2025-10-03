const BASE_URL = "http://localhost:3001/api";

// Arrow Function Syntax
export const getMovies2 = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `Error Status: ${response.status}`);
  }
  return response.json();
};

// Async Function Declaration
export async function getMovies() {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `Error Status: ${response.status}`);
  }
  return response.json();
}
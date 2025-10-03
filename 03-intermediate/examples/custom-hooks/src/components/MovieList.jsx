import useFetch from "../hooks/useFetch"

function MovieList() {
  const { data: movies, isLoading, error } = 
    useFetch('http://localhost:3001/api/movies');

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>  
  );
}

export default MovieList;
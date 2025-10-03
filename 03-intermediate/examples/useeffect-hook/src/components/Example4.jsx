import { useState, useEffect } from 'react'

// fake component to render search results for a query
function Example4({ query }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    
    setIsLoading(true);
    const abortController = new AbortController();
    
    fetch(`/api/search?q=${query}`, {
      signal: abortController.signal
    })
    .then(response => response.json())
    .then(data => {
      setResults(data);
      setIsLoading(false);
    })
    .catch(error => {
      if (error.name !== 'AbortError') {
        setIsLoading(false);
      }
    });
    
    return () => abortController.abort();
  }, [query]);


  return (
    <></>
  );
}

export default Example4;
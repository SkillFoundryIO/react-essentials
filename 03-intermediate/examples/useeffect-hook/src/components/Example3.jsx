import { useState, useEffect } from 'react'

// infinite loop, do not do this!
function Example3() {
  const [data, setData] = useState([]);
  
  // we setData inside the effect, 
  // which triggers the dependency infinitely
  useEffect(() => {
    setData([...data, 'new item']);
  }, [data]); 

  return (
    <></>
  );
}

export default Example3;
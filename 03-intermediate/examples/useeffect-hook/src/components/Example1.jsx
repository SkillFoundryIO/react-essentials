import { useEffect, useState } from 'react'

function Example1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log("Runs when name or email changes.");
  }, [name, email]);

  useEffect(() => {
    console.log("No dependencies, runs after every render.");
  });

  useEffect(() => {
    console.log("Runs once on mount.");
  }, []);



  return (
    <></>
  );
}

export default Example1;
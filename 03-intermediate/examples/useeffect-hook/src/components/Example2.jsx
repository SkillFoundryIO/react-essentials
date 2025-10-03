import { useEffect } from 'react'

function Example2() {

  // start a timer, logging every 1s
  useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
    }, 1000);
    
    // timer will be cleared
    return () => clearInterval(timer);
  }, []);

  return(
    <>
      <p>Check the console window for the timer output.</p>
    </>
  );
}

export default Example2;
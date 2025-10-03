import { useState } from 'react';
import './CoinFlipper.css';

function CoinFlipper() {
  console.log('rendering component');
  const [message, setMessage] = useState('Click the button to flip the coin!');

  function generateRandomNumber() {
      return Math.floor(Math.random() * 2);
  }

  function flipCoin() {
      console.log('FlipCoin function started');
      const randomNum = generateRandomNumber();
      const coinResult = randomNum === 0 ? 'Heads' : 'Tails';
      // inline function to get the previous state value
      console.log('Invoking setMessage()')
      setMessage((prev) => {
        console.log(`Inside set function: The previous value is: ${prev}`);
        // return the new value to the set function
        return `Result: ${coinResult}`;
      });

      console.log('setMessage() call completed')
  }
  
  return(
    <div className="coin-flip-container">
      <h1>Coin Flip</h1>
      <button onClick={flipCoin}>Flip Coin</button>
      <p>{message}</p>
    </div>
  );
};

export default CoinFlipper;
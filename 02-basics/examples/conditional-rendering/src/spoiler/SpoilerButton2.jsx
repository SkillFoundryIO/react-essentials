import { useState } from 'react';
import './SpoilerButton.css'

function SpoilerButton2() {
  // create state variable and update function, default invisible
  const [isVisible, setIsVisible] = useState(false);

  // we can assign JSX to variables
  const spoilerMessage = (
        <p id="spoiler" className="spoiler-text">
          Kaiser Soze is Verbal Kent!
        </p>
      );

  function handleSpoilerClick() {
    // toggle visibility
    setIsVisible(!isVisible);
  }

  return (
    <div className="spoiler-container">
      <p>The movie's plot twist is...</p>
      <button className="spoiler-button" onClick={handleSpoilerClick}>
        Show Spoiler
      </button>
      {isVisible && spoilerMessage}
    </div>
  );
}

export default SpoilerButton2;
import './SpoilerButton.css'

function SpoilerButton() {
  function handleSpoilerClick() {
    const spoilerElement = document.getElementById('spoiler');
    spoilerElement.style.display = 'block';
  }

  return (
    <div className="spoiler-container">
      <p>The movie's plot twist is...</p>
      <button className="spoiler-button" onClick={handleSpoilerClick}>
        Show Spoiler
      </button>
      <p id="spoiler" className="spoiler-text" style={{display: 'none'}}>
        Kaiser Soze is Verbal Kent!
      </p>
    </div>
  );
}

export default SpoilerButton;
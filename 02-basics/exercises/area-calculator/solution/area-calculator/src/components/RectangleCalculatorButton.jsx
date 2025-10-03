import { useState } from 'react';

function RectangleCalculatorButton() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState(null);

  function calculateArea() {
      const lengthNum = parseFloat(length);
      const widthNum = parseFloat(width);
      
      // Check if both inputs are valid numbers
      if (!isNaN(lengthNum) && !isNaN(widthNum) && lengthNum > 0 && widthNum > 0) {
        setArea(lengthNum * widthNum);
      } else {
        setArea(null); // Reset area if inputs are invalid
      }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Rectangle Calculator (Button)</h2>
        
        {/* Length Input */}
        <div className="mb-3">
          <label className="form-label">Length</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter length"
              value={length}
              onChange={(e) => setLength(e.target.value)} 
            />
            <span className="input-group-text">units</span>
          </div>
        </div>

        {/* Width Input */}
        <div className="mb-3">
          <label className="form-label">Width</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter width"
              value={width}
              onChange={(e) => setWidth(e.target.value)} 
            />
            <span className="input-group-text">units</span>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="d-grid mb-3">
          <button 
            className="btn btn-primary btn-lg"
            onClick={calculateArea}
          >
            Calculate Area
          </button>
        </div>

        {/* Results Display */}
        <div className="alert alert-info text-center">
          <h4 className="mb-0">
            Area: {area !== null ? area : 0}
            <span className="text-primary"> square units</span>
          </h4>
          <small className="text-muted">Updates when you click the button</small>
        </div>
      </div>
    </div>
  );
}

export default RectangleCalculatorButton;
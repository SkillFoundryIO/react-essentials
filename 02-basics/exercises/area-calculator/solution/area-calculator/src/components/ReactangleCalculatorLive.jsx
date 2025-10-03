import { useState } from 'react';

function RectangleCalculatorLive() {
  // State management for length and width inputs
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  // Calculate area dynamically based on current state
  const calculateLiveArea = () => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    
    // Return calculated area if both inputs are valid positive numbers
    if (!isNaN(lengthNum) && !isNaN(widthNum) && lengthNum > 0 && widthNum > 0) {
      return lengthNum * widthNum;
    }
    
    // Return null if inputs are invalid or empty
    return null;
  };

  // this doesn't need to be in state, because it will be updated on each re-render.
  const area = calculateLiveArea();

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Rectangle Calculator (Live)</h2>
        
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

        {/* Live Results Display */}
        <div className="alert alert-success text-center">
          <h4 className="mb-0">
            Area: {area !== null ? area : 0}
            <span className="text-success"> square units</span>
          </h4>
          <small className="text-muted">Updates automatically as you type</small>
        </div>
      </div>
    </div>
  );
}

export default RectangleCalculatorLive;
function RectangleCalculatorButton() {
  // TODO: Add your state management here (length, width, area)

  // TODO: Add your calculateArea function here

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
              // TODO: Add value
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
              // TODO: Add value
            />
            <span className="input-group-text">units</span>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="d-grid mb-3">
          <button 
            className="btn btn-primary btn-lg"
            // TODO: Add onClick handler
          >
            Calculate Area
          </button>
        </div>

        {/* Results Display */}
        <div className="alert alert-info text-center">
          <h4 className="mb-0">
            Area: {/* TODO: Display calculated area or default message */}
            <span className="text-primary">square units</span>
          </h4>
          <small className="text-muted">Updates when you click the button</small>
        </div>
      </div>
    </div>
  );
}

export default RectangleCalculatorButton;
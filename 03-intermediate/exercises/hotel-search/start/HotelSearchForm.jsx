
function HotelSearchForm() {
  
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-0">Hotel Search</h3>
            </div>
            <div className="card-body">
              <div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkin" className="form-label">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="checkin"
                      name="checkin"
                    />
                    {/* Add error message div here */}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkout" className="form-label">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="checkout"
                      name="checkout"
                    />
                    {/* Add error message div here */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="roomtype" className="form-label">
                      Room Type *
                    </label>
                    <select className="form-select" id="roomtype" name="roomtype">
                      <option value="">Select room type</option>
                      <option value="double">2 Double Beds</option>
                      <option value="king">King Bed</option>
                    </select>
                    {/* Add error message div here */}
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="adults" className="form-label">
                          Adults *
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="adults"
                          name="adults"
                          min="1"
                          max="5"
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="children" className="form-label">
                          Children (Under 16)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="children"
                          name="children"
                          min="0"
                          max="4"
                        />
                      </div>
                    </div>
                    {/* Add error message div here */}
                  </div>
                </div>

                {/* Display calculated information */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="bg-light p-3 rounded">
                      <div className="row">
                        <div className="col-md-4">
                          <strong>Nights: </strong>
                          <span id="nights-display">-</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Total Guests: </strong>
                          <span id="guests-display">0</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Room Capacity: </strong>
                          <span id="capacity-display">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form buttons */}
                <div className="row">
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn btn-primary me-2"
                    >
                      Search Hotels
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchForm;
import { useState } from 'react'
import { validateHotelSearchForm } from '../scripts/hotelValidation'

function HotelSearchForm() {
  // Combine the form data and validation into a single object
  const initialData = {
    checkin: {value: '', dirty: false, valid: false, message: ''},
    checkout: {value: '', dirty: false, valid: false, message: ''},
    roomtype: {value: '', dirty: false, valid: false, message: ''},
    adults: {value: '', dirty: false, valid: false, message: ''},
    children: {value: '', dirty: false, valid: true, message: ''} // optional field, starts valid
  };

  // Register state variable, defaulting to the initial data
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(fieldName, newValue) {
    setFormData(prevState => {
      const newState = {
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          value: newValue
        }
      };
      // Validate and return the validated state
      return validateHotelSearchForm(newState, false);
    });
  }

  function handleInputBlur(fieldName) {
    setFormData(prevState => {
      const newState = {
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          dirty: true
        }
      };
      // Validate and return the validated state
      return validateHotelSearchForm(newState, false);
    });
  }

  function isFormValid() {
    // check that all fields are valid
    return Object.keys(formData).every(key => formData[key].valid);
  }

  function handleSubmit(e) {
    // always prevent default form submission!
    e.preventDefault();

    const validatedData = validateHotelSearchForm(formData, true);
    setFormData(validatedData);

    if (isFormValid()) {
      console.log('Valid form, submitting', formData);
      // You could clear form on submit if desired
      // setFormData(initialData);
    } else {
      console.log('The form is invalid');
    }
  }

  function handleClear() {
    setFormData(initialData);
  }

  // Calculate derived values
  function calculateNights() {
    if (formData.checkin.value && formData.checkout.value) {
      const checkinDate = new Date(formData.checkin.value);
      const checkoutDate = new Date(formData.checkout.value);
      const diffTime = checkoutDate - checkinDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  }

  function calculateTotalGuests() {
    const adults = parseInt(formData.adults.value) || 0;
    const children = parseInt(formData.children.value) || 0;
    return adults + children;
  }

  function getRoomCapacity() {
    switch (formData.roomtype.value) {
      case 'double':
        return 5;
      case 'king':
        return 3;
      default:
        return 0;
    }
  }

  const nights = calculateNights();
  const totalGuests = calculateTotalGuests();
  const roomCapacity = getRoomCapacity();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-0">Hotel Search</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                      value={formData.checkin.value}
                      onChange={(e) => handleInputChange('checkin', e.target.value)}
                      onBlur={() => handleInputBlur('checkin')}
                    />
                    {formData.checkin.dirty && !formData.checkin.valid && (
                      <div className="text-danger small">{formData.checkin.message}</div>
                    )}
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
                      value={formData.checkout.value}
                      onChange={(e) => handleInputChange('checkout', e.target.value)}
                      onBlur={() => handleInputBlur('checkout')}
                    />
                    {formData.checkout.dirty && !formData.checkout.valid && (
                      <div className="text-danger small">{formData.checkout.message}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="roomtype" className="form-label">
                      Room Type *
                    </label>
                    <select 
                      className="form-select" 
                      id="roomtype" 
                      name="roomtype"
                      value={formData.roomtype.value}
                      onChange={(e) => handleInputChange('roomtype', e.target.value)}
                      onBlur={() => handleInputBlur('roomtype')}
                    >
                      <option value="">Select room type</option>
                      <option value="double">2 Double Beds</option>
                      <option value="king">King Bed</option>
                    </select>
                    {formData.roomtype.dirty && !formData.roomtype.valid && (
                      <div className="text-danger small">{formData.roomtype.message}</div>
                    )}
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
                          value={formData.adults.value}
                          onChange={(e) => handleInputChange('adults', e.target.value)}
                          onBlur={() => handleInputBlur('adults')}
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
                          value={formData.children.value}
                          onChange={(e) => handleInputChange('children', e.target.value)}
                          onBlur={() => handleInputBlur('children')}
                        />
                      </div>
                    </div>
                    {(formData.adults.dirty && !formData.adults.valid) && (
                      <div className="text-danger small">{formData.adults.message}</div>
                    )}
                    {(formData.children.dirty && !formData.children.valid) && (
                      <div className="text-danger small">{formData.children.message}</div>
                    )}
                  </div>
                </div>

                {/* Display calculated information */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="bg-light p-3 rounded">
                      <div className="row">
                        <div className="col-md-4">
                          <strong>Nights: </strong>
                          <span id="nights-display">{nights || '-'}</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Total Guests: </strong>
                          <span id="guests-display">{totalGuests}</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Room Capacity: </strong>
                          <span id="capacity-display">{roomCapacity || '-'}</span>
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
                      onClick={handleClear}
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchForm;
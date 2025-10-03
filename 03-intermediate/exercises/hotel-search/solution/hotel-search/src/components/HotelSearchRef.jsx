import { useRef, useState } from 'react';

function HotelSearchForm() {
  const checkinRef = useRef();
  const checkoutRef = useRef();
  const roomtypeRef = useRef();
  const adultsRef = useRef();
  const childrenRef = useRef();
  
  // State for errors and calculated fields
  const [errors, setErrors] = useState({});
  const [nights, setNights] = useState('-');
  const [totalGuests, setTotalGuests] = useState(0);
  const [roomCapacity, setRoomCapacity] = useState('-');

  function calculateFields(checkin, checkout, adults, children, roomtype) {
    let calculatedNights = '-';
    let calculatedGuests = 0;
    let calculatedCapacity = '-';

    // Calculate nights
    if (checkin && checkout) {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      if (checkoutDate > checkinDate) {
        calculatedNights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
      }
    }

    // Calculate total guests
    const adultCount = parseInt(adults) || 0;
    const childCount = parseInt(children) || 0;
    calculatedGuests = adultCount + childCount;

    // Calculate room capacity
    if (roomtype === 'double') {
      calculatedCapacity = '5 guests';
    } else if (roomtype === 'king') {
      calculatedCapacity = '3 guests';
    }

    return { calculatedNights, calculatedGuests, calculatedCapacity };
  };

  function validateForm(formData) {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0]; // Gets YYYY-MM-DD format, we're not messing with timezones for this =)

    // Check-in date validation
    if (!formData.checkin) {
      newErrors.checkin = 'Check-in date is required';
    } else {
      const checkinDate = new Date(formData.checkin);
      if (checkinDate < today) {
        newErrors.checkin = 'Check-in date must be today or in the future';
      }
    }

    // Check-out date validation
    if (!formData.checkout) {
      newErrors.checkout = 'Check-out date is required';
    } else if (formData.checkin) {
      const checkinDate = new Date(formData.checkin);
      const checkoutDate = new Date(formData.checkout);
      if (checkoutDate <= checkinDate) {
        newErrors.checkout = 'Check-out date must be after check-in date';
      }
    }

    // Room type validation
    if (!formData.roomtype) {
      newErrors.roomtype = 'Room type is required';
    }

    // Adults validation
    const adults = parseInt(formData.adults) || 0;
    if (adults < 1) {
      newErrors.adults = 'At least 1 adult is required';
    }

    // Children validation (if children present, need adults)
    const children = parseInt(formData.children) || 0;
    if (children > 0 && adults < 1) {
      newErrors.children = 'At least 1 adult is required when children are present';
    }

    // Room capacity validation
    const totalGuests = adults + children;
    if (formData.roomtype === 'double' && totalGuests > 5) {
      newErrors.capacity = 'Double bed room exceeds maximum capacity (5 guests)';
    } else if (formData.roomtype === 'king' && totalGuests > 3) {
      newErrors.capacity = 'King bed room exceeds maximum capacity (3 guests)';
    }

    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      checkin: checkinRef.current.value,
      checkout: checkoutRef.current.value,
      roomtype: roomtypeRef.current.value,
      adults: adultsRef.current.value,
      children: childrenRef.current.value,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      setErrors({});
      
      // Update calculated fields
      const { calculatedNights, calculatedGuests, calculatedCapacity } = calculateFields(
        formData.checkin, formData.checkout, formData.adults, formData.children, formData.roomtype
      );
      setNights(calculatedNights);
      setTotalGuests(calculatedGuests);
      setRoomCapacity(calculatedCapacity);
    } else {
      setErrors(validationErrors);
    }
  };

  function handleClear() {
    checkinRef.current.value = '';
    checkoutRef.current.value = '';
    roomtypeRef.current.value = '';
    adultsRef.current.value = '';
    childrenRef.current.value = '';
    setErrors({});
    setNights('-');
    setTotalGuests(0);
    setRoomCapacity('-');
  };

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
                      className={`form-control ${errors.checkin ? 'is-invalid' : ''}`}
                      id="checkin"
                      name="checkin"
                      ref={checkinRef}
                    />
                    {errors.checkin && (
                      <div className="invalid-feedback">{errors.checkin}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkout" className="form-label">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      className={`form-control ${errors.checkout ? 'is-invalid' : ''}`}
                      id="checkout"
                      name="checkout"
                      ref={checkoutRef}
                    />
                    {errors.checkout && (
                      <div className="invalid-feedback">{errors.checkout}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="roomtype" className="form-label">
                      Room Type *
                    </label>
                    <select 
                      className={`form-select ${errors.roomtype ? 'is-invalid' : ''}`} 
                      id="roomtype" 
                      name="roomtype"
                      ref={roomtypeRef}
                    >
                      <option value="">Select room type</option>
                      <option value="double">2 Double Beds</option>
                      <option value="king">King Bed</option>
                    </select>
                    {errors.roomtype && (
                      <div className="invalid-feedback">{errors.roomtype}</div>
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
                          className={`form-control ${errors.adults ? 'is-invalid' : ''}`}
                          id="adults"
                          name="adults"
                          min="1"
                          max="5"
                          ref={adultsRef}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="children" className="form-label">
                          Children (Under 16)
                        </label>
                        <input
                          type="number"
                          className={`form-control ${errors.children ? 'is-invalid' : ''}`}
                          id="children"
                          name="children"
                          min="0"
                          max="4"
                          ref={childrenRef}
                        />
                      </div>
                    </div>
                    {(errors.adults || errors.children) && (
                      <div className="text-danger small mt-1">
                        {errors.adults || errors.children}
                      </div>
                    )}
                  </div>
                </div>

                {errors.capacity && (
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="alert alert-danger">{errors.capacity}</div>
                    </div>
                  </div>
                )}

                {/* Display calculated information */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="bg-light p-3 rounded">
                      <div className="row">
                        <div className="col-md-4">
                          <strong>Nights: </strong>
                          <span id="nights-display">{nights}</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Total Guests: </strong>
                          <span id="guests-display">{totalGuests}</span>
                        </div>
                        <div className="col-md-4">
                          <strong>Room Capacity: </strong>
                          <span id="capacity-display">{roomCapacity}</span>
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
                      onClick={handleSubmit}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchForm;
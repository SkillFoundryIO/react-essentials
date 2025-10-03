// This function validates our hotel search form data object for the mixed solution
export function validateHotelSearchForm(formData, submitted) {
  let validatedData;

  if (submitted) {
    validatedData = Object.fromEntries(
      Object.entries(formData).map(([key, field]) => [key, { ...field, dirty: true }])
    );
  } else {
    validatedData = formData;
  }

  // Get today's date for string comparison
  const today = new Date().toISOString().split('T')[0];

  // Check-in date validation
  if (validatedData.checkin.dirty) {
    if (!validatedData.checkin.value) {
      setError(validatedData.checkin, 'Check-in date is required');
    } else {
      if (validatedData.checkin.value < today) {
        setError(validatedData.checkin, 'Check-in date must be today or a future date');
      } else {
        setFieldValid(validatedData.checkin);
      }
    }
  }

  // Check-out date validation
  if (validatedData.checkout.dirty) {
    if (!validatedData.checkout.value) {
      setError(validatedData.checkout, 'Check-out date is required');
    } else if (!validatedData.checkin.value) {
      setError(validatedData.checkout, 'Please select check-in date first');
    } else {
      
      if (validatedData.checkout.value <= validatedData.checkin.value) {
        setError(validatedData.checkout, 'Check-out date must be after check-in date');
      } else {
        setFieldValid(validatedData.checkout);
      }
    }
  }

  // Room type validation
  if (validatedData.roomtype.dirty) {
    if (!validatedData.roomtype.value) {
      setError(validatedData.roomtype, 'Please select a room type');
    } else {
      setFieldValid(validatedData.roomtype);
    }
  }

  // Adults validation
  if (validatedData.adults.dirty) {
    const adultsCount = parseInt(validatedData.adults.value);
    
    if (!validatedData.adults.value || isNaN(adultsCount)) {
      setError(validatedData.adults, 'Number of adults is required');
    } else if (adultsCount < 1) {
      setError(validatedData.adults, 'At least 1 adult is required');
    } else if (adultsCount > 5) {
      setError(validatedData.adults, 'Maximum 5 adults allowed');
    } else {
      setFieldValid(validatedData.adults);
    }
  }

  // Children validation
  if (validatedData.children.dirty) {
    const childrenCount = parseInt(validatedData.children.value) || 0;
    const adultsCount = parseInt(validatedData.adults.value) || 0;
    
    if (childrenCount < 0) {
      setError(validatedData.children, 'Children count cannot be negative');
    } else if (childrenCount > 4) {
      setError(validatedData.children, 'Maximum 4 children allowed');
    } else if (childrenCount > 0 && adultsCount < 1) {
      setError(validatedData.children, 'At least 1 adult required when children are present');
    } else {
      setFieldValid(validatedData.children);
    }
  }

  // Room capacity validation (cross-field validation)
  // This runs when adults, children, or roomtype are dirty
  if ((validatedData.adults.dirty || validatedData.children.dirty || validatedData.roomtype.dirty) &&
      validatedData.roomtype.value && validatedData.adults.value) {
    
    const adultsCount = parseInt(validatedData.adults.value) || 0;
    const childrenCount = parseInt(validatedData.children.value) || 0;
    const totalGuests = adultsCount + childrenCount;
    
    let maxCapacity = 0;
    let roomTypeName = '';
    
    switch (validatedData.roomtype.value) {
      case 'double':
        maxCapacity = 5;
        roomTypeName = '2 Double Beds';
        break;
      case 'king':
        maxCapacity = 3;
        roomTypeName = 'King Bed';
        break;
    }
    
    if (totalGuests > maxCapacity) {
      // Set error on adults field for capacity issues
      setError(validatedData.adults, `${roomTypeName} room can accommodate maximum ${maxCapacity} guests (${totalGuests} selected)`);
      
      // Also set error on children if there are children
      if (childrenCount > 0) {
        setError(validatedData.children, `Total guests (${totalGuests}) exceed room capacity (${maxCapacity})`);
      }
    } else if (validatedData.adults.valid && validatedData.children.valid) {
      // Only clear capacity errors if the individual field validations pass
      if (adultsCount >= 1 && adultsCount <= 5) {
        setFieldValid(validatedData.adults);
      }
      if (childrenCount >= 0 && childrenCount <= 4 && (childrenCount === 0 || adultsCount >= 1)) {
        setFieldValid(validatedData.children);
      }
    }
  }

  return validatedData;
}

function setError(field, message) {
  field.valid = false;
  field.message = message;
}

function setFieldValid(field) {
  field.valid = true;
  field.message = '';
}
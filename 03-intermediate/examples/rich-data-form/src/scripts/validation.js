// This function validates our rich form data object
// It allows us the flexbility to do dirty checking and error messages
export function validateRegistrationForm(formData, submitted) {
  // For deep copy, avoid mutating formData
  let validatedData;

  if (submitted) {
    // form submitted, mark all fields as dirty during deep copy
    validatedData = Object.fromEntries(
      Object.entries(formData).map(([key, field]) => [key, { ...field, dirty: true }])
    );
  } else {
    // ok to mutate, the onChange and onBlur deep copy before validation
    validatedData = formData;
  }

  // Name validation
  if (validatedData.name.dirty) {
    if (!validatedData.name.value.trim()) {
      setError(validatedData.name, 'Name is required');
    } else if (validatedData.name.value.trim().length < 2) {
      setError(validatedData.name, 'Name must be at least 2 characters');
    } else {
      setFieldValid(validatedData.name);
    }
  }

  // Email validation
  if (validatedData.email.dirty) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validatedData.email.value) {
      setError(validatedData.email, 'Email is required');
    } else if (!emailRegex.test(validatedData.email.value)) {
      setError(validatedData.email, 'Please enter a valid email');
    } else {
      setFieldValid(validatedData.email);
    }
  }

  // Password validation
  if (validatedData.password.dirty) {
    if (!validatedData.password.value) {
      setError(validatedData.password, 'Password is required');
    } else if (validatedData.password.value.length < 8) {
      setError(validatedData.password, 'Password must be at least 8 characters');
    } else {
      setFieldValid(validatedData.password);
    }
  }

  // Confirm password validation
  if (validatedData.confirmPassword.dirty) {
    if (!validatedData.confirmPassword.value) {
      setError(validatedData.confirmPassword, 'Please confirm your password');
    } else if (validatedData.password.value !== validatedData.confirmPassword.value) {
      setError(validatedData.confirmPassword, 'Passwords do not match');
    } else {
      setFieldValid(validatedData.confirmPassword);
    }
  }

  // Age validation
  if (validatedData.age.dirty) {
    if (!validatedData.age.value) {
      setError(validatedData.age, 'Please select your age range');
    } else {
      setFieldValid(validatedData.age);
    }
  }

  // Language validation
  if (validatedData.language.dirty) {
    if (!validatedData.language.value) {
      setError(validatedData.language, 'Please select your favorite language');
    } else {
      setFieldValid(validatedData.language);
    }
  }

  // Terms validation
  if (validatedData.agreeToTerms.dirty) {
    if (!validatedData.agreeToTerms.value) {
      setError(validatedData.agreeToTerms, 'Please agree to the terms & conditions');
    } else {
      setFieldValid(validatedData.agreeToTerms);
    }
  }

  return validatedData;
};

function setError(field, message) {
  field.valid = false;
  field.message = message;
}

function setFieldValid(field) {
  field.valid = true;
  field.message = '';
}
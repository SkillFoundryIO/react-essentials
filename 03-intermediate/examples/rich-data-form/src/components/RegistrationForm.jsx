import { useState } from 'react'
import { validateRegistrationForm } from '../scripts/validation'

function RegistrationForm() {
  const languageChoices = ['JavaScript', 'C#', 'Java', 'Python', 'Other'];

  // Combine the form data and validation into a single object
  const initialData = {
    name: {value: '', dirty: false, valid: false, message: ''},
    email: {value: '', dirty: false, valid: false, message: ''},
    password: {value: '', dirty: false, valid: false, message: ''},
    confirmPassword: {value: '', dirty: false, valid: false, message: ''},
    age: {value: '', dirty: false, valid: false, message: ''},
    language: {value: '', dirty: false, valid: false, message: ''},
    agreeToTerms: {value: false, dirty: false, valid: false, message: ''}
  };

  // Register state variable, defaulting to the inital data
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
      return validateRegistrationForm(newState, false);
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
      return validateRegistrationForm(newState, false);
    });
  }

  function isFormValid(data) {
    // check that all fields are valid
    return Object.keys(data).every(key => data[key].valid);
  };

  function handleSubmit(e) {
    // always prevent default form submission!
    e.preventDefault();

    const validatedData = validateRegistrationForm(formData, true);
    setFormData(validatedData);

    if (isFormValid(validatedData)) {
      console.log('Valid form, submitting', formData);
      // clear form on submit
      setFormData(initialData);
    } else {
      console.log('The form is invalid');
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registration Form</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="name"
                    value={formData.name.value}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleInputBlur('name')}
                    placeholder="Enter your name"
                  />
                  {formData.name.dirty && !formData.name.valid && (
                    <div className="text-danger small">{formData.name.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value={formData.email.value}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => handleInputBlur('email')}
                    placeholder="Enter your email"
                  />
                  {formData.email.dirty && !formData.email.valid && (
                    <div className="text-danger small">{formData.email.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    value={formData.password.value}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onBlur={() => handleInputBlur('password')}
                    placeholder="Enter your password"
                  />
                  {formData.password.dirty && !formData.password.valid && (
                    <div className="text-danger small">{formData.password.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword.value}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    onBlur={() => handleInputBlur('confirmPassword')}
                    placeholder="Confirm your password"
                  />
                  {formData.confirmPassword.dirty && !formData.confirmPassword.valid && (
                    <div className="text-danger small">{formData.confirmPassword.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <select 
                    className="form-select" 
                    id="age"
                    name="age"
                    value={formData.age.value}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    onBlur={() => handleInputBlur('age')}
                  >
                    <option value="">- select -</option>
                    <option value="under18">Under 18</option>
                    <option value="19-30">19-30</option>
                    <option value="31-45">31-45</option>
                    <option value="45+">45+</option>
                  </select>
                  {formData.age.dirty && !formData.age.valid && (
                    <div className="text-danger small">{formData.age.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Favorite Language</label>
                  <div>
                    {languageChoices.map(lang => (
                      <div className="form-check" key={lang}>
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="language" 
                          id={lang.toLowerCase().replace('#', 'sharp')}
                          value={lang}
                          checked={formData.language.value === lang}
                          onChange={(e) => handleInputChange('language', e.target.value)}
                          onBlur={() => handleInputBlur('language')}
                        />
                        <label 
                          className="form-check-label" 
                          htmlFor={lang.toLowerCase().replace('#', 'sharp')}
                        >
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formData.language.dirty && !formData.language.valid && (
                    <div className="text-danger small">{formData.language.message}</div>
                  )}
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms.value}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      onBlur={() => handleInputBlur('agreeToTerms')}
                    />
                    <label className="form-check-label" htmlFor="agreeToTerms">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                  {formData.agreeToTerms.dirty && !formData.agreeToTerms.valid && (
                    <div className="text-danger small">{formData.agreeToTerms.message}</div>
                  )}
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setFormData(initialData)}
                  >
                    Reset
                  </button>
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
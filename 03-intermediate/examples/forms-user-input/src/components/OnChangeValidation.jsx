import { useState } from 'react'

function RegistrationForm() {
  const languageChoices = ['JavaScript', 'C#', 'Java', 'Python', 'Other'];

  // Initialize the state for all form values
  const initialData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    language: '',
    agreeToTerms: false
  };

  // Register state variable, defaulting to the inital data
  const [formData, setFormData] = useState(initialData);


  // validation
  const emailIsInvalid = 
    formData.email !== '' && !formData.email.includes('@');

  function handleInputChange(e) {
    // destruct target
    const { name, value, type, checked } = e.target;
    // create a new form data object using the immutability best practice
    setFormData(prevState => ({
      // load the previous data
      ...prevState,
      // replace the data for the target form name
      // the ternary handles checkboxes which are 'checked'
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleSubmit(e) {
    // always prevent default form submission!
    e.preventDefault();

    console.log('Form data:');
    console.log(formData);

    // clear form on submit
    setFormData(initialData);
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
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {emailIsInvalid && (
                    <div className="text-danger small">Email is invalid.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <select 
                    className="form-select" 
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  >
                    <option value="">- select -</option>
                    <option value="under18">Under 18</option>
                    <option value="19-30">19-30</option>
                    <option value="31-45">31-45</option>
                    <option value="45+">45+</option>
                  </select>
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
                          checked={formData.language === lang}
                          onChange={handleInputChange}
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
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="agreeToTerms">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
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
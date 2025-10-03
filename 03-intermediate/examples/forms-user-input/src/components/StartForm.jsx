// This form is not rendered in the sample
// It contains the starting form with no React elements for convenience

function StartForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registration Form</h2>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="name"
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
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
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
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <select 
                    className="form-select" 
                    id="age" 
                    name="age"
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
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="language" 
                        id="javascript"
                        value="JavaScript"
                      />
                      <label className="form-check-label" htmlFor="javascript">
                        JavaScript
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="language" 
                        id="csharp"
                        value="C#"
                      />
                      <label className="form-check-label" htmlFor="csharp">
                        C#
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="language" 
                        id="java"
                        value="Java"
                      />
                      <label className="form-check-label" htmlFor="java">
                        Java
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="language" 
                        id="python"
                        value="Python"
                      />
                      <label className="form-check-label" htmlFor="python">
                        Python
                      </label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="language" 
                        id="other"
                        value="Other"
                      />
                      <label className="form-check-label" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="agreeToTerms"
                      name="agreeToTerms"
                    />
                    <label className="form-check-label" htmlFor="agreeToTerms">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="button" className="btn btn-secondary">Reset</button>
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

export default StartForm;
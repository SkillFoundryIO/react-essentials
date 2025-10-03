import { useState } from 'react'
import EditableField from './EditableField';

function AboutForm() {
  const [firstName, setFirstName] = useState('Eric');
  const [lastName, setLastName] = useState('Wise');
  const [email, setEmail] = useState('eric.wise@example.com');

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '2rem' }}>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Editable Form Demo</h2>
          
          <div className="d-grid gap-3">
            <EditableField
              label="First Name"
              value={firstName}
              setValue={setFirstName}
            />
            
            <EditableField
              label="Last Name"
              value={lastName}
              setValue={setLastName}
            />
            
            <EditableField
              label="Email"
              value={email}
              setValue={setEmail}
            />
          </div>

          <div className="mt-4 p-3 bg-light rounded">
            <h5 className="text-secondary mb-2">Current State:</h5>
            <div className="small text-muted">
              <div>First Name: {firstName}</div>
              <div>Last Name: {lastName}</div>
              <div>Email: {email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default AboutForm;
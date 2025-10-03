import { useState } from 'react'

function EditableField({ label, value, setValue }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);


  const handleEditClick = () => {
      // Whatever the original value is gets stored
    setTempValue(value);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Lift state up by calling the parent's setter
    setValue(tempValue); 
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset to original value
    setTempValue(value); 
    setIsEditing(false);
  };

  return (
    <div className="d-flex align-items-center gap-2 p-3 border rounded bg-light">
      <span className="fw-semibold text-secondary">{label}:</span>
      
      {isEditing ? (
        <>
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="form-control form-control-sm"
            style={{ width: 'auto', minWidth: '150px' }}
            autoFocus
          />
          <button
            onClick={handleSaveClick}
            className="btn btn-success btn-sm"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="btn btn-secondary btn-sm"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="text-dark">{value}</span>
          <button
            onClick={handleEditClick}
            className="btn btn-primary btn-sm"
          >
            Edit
          </button>
        </>
      )}
    </div>
  )
}

export default EditableField;
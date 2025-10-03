import { useRef, useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);
  
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // Handle backdrop clicks
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog 
      ref={dialogRef} 
      onClose={onClose}
      onClick={handleBackdropClick}
      className="rounded-3 border-0 shadow-lg"
      style={{ 
        padding: 0, 
        maxWidth: '500px',
        width: '90vw'
      }}
    >
      <div className="modal-content">
        <div className="modal-header bg-primary text-white p-3">
          <h5 className="modal-title mb-0">{title}</h5>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="modal-body p-3">
          {children}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
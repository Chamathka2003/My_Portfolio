import React from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, onClose, type, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-icon ${type}`}>
          {type === 'success' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <h3 className="modal-title">
          {type === 'success' ? 'Success!' : 'Oops!'}
        </h3>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}

export default Modal;

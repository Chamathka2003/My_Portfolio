import React from 'react';
import '../styles/ImageModal.css';

function ImageModal({ isOpen, onClose, imageUrl, projectName }) {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={imageUrl} alt={projectName} className="modal-image" />
        <p className="modal-caption">{projectName}</p>
      </div>
    </div>
  );
}

export default ImageModal;

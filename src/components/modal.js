import React from "react";
import './modal.css'

const Modal = ({ show, onClose, content }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <div>{content}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;
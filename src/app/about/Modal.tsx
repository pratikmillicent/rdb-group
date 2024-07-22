import React from "react";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
  return (
    <div className="modal-backdrop" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="w-100">
        <p onClick={onClose} className="text-dark text-right cursor-pointer fw-800">X</p>
        </div>
        <div className="modal-header">
          <h2>{title}</h2>
          
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
      
    </div>
  );
};

export default Modal;

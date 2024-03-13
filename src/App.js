// src/App.js
import React, { useState } from "react";

// Import components
import Modal from "./lib/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Icon Cross close par défault sur la modal
  const defaultCloseIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
  

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Create Employee</button>
      <Modal
        isOpen={isModalOpen}
        handleClose={closeModal}
        showCloseLink={true}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={<p>Contenu de la modal.</p>}
        className="custom-modal-style"
        disableScroll={false}
        centeredModal={true}
        closeIcon={defaultCloseIcon}
        closeClass={`custumClose`}
      />
    </div>
  );
}

export default App;

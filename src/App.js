// src/App.js
import React, { useState } from "react";

// Import components
import Modal from "./lib/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Create Employee</button>
      <Modal
        isOpen={isModalOpen}
        handleClose={closeModal}
        showCloseLink={true}
        escapeClose={true}
        enableCloseIconClick = {true}
        title="Titre de la Modal"
        content={<p>Contenu de la modal.</p>}
        className="custom-modal-style"
        disableScroll={false}
        centeredModal={true}
      />
    </div>
  );
}

export default App;

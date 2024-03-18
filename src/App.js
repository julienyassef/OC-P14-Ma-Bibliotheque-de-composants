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
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={<p>Contenu de la modal.</p>}
        disableScroll={true}
        centeredModal={true}
        closeClass={`custumClose`}
        fadeDurationOverlay={0}
        fadeDelayOverlay={0}
        fadeDurationModal={0}
        fadeDelayModal={0}
      />
    </div>
  );
}

export default App;

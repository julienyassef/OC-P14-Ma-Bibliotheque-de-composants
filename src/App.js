// src/App.js
import React, { useState } from "react";

// Import components
import ModalEmployeeCreated from "./lib/ModalEmployeeCreated/ModalEmployeeCreated";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Create Employee</button>
      <ModalEmployeeCreated
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      />
    </div>
  );
}

export default App;

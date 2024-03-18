// src/App.js
import React, { useState } from "react";

// Import components
import Modal from "./lib/Modal/Modal";

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpenFirstModal = () => setIsFirstModalOpen(true);
  const handleOpenSecondModal = () => setIsSecondModalOpen(true);

  const handleCloseFirstModal = () => setIsFirstModalOpen(false);
  const handleCloseSecondModal = () => setIsSecondModalOpen(false);

  return (
    <div className="App">
      <button onClick={handleOpenFirstModal}>Open First Modal</button>

      <Modal
        isOpen={isFirstModalOpen}
        closePreviousOnOpen={true}
        handleClose={handleCloseFirstModal}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={
          <p>
            Je suis la première modal.{" "}
            <button onClick={handleOpenSecondModal}>Open Second Modal</button>
          </p>
        }
        disableScroll={true}
        centeredModal={true}
        closeClass={`custumClose`}
        fadeDurationOverlay={0}
        fadeDelayOverlay={0}
        fadeDurationModal={0}
        fadeDelayModal={0}
      />
      <Modal
        isOpen={isSecondModalOpen}
        closePreviousOnOpen={true}
        handleClose={handleCloseSecondModal}
        escapeClose={true}
        enableCloseIconClick={true}
        closeOnClickOutside={true}
        title="Titre de la Modal"
        content={<p>je suis la seconde modal. </p>}
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

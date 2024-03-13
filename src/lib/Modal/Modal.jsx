//scss
import './Modal.scss'

//React
import React, { useEffect, useRef } from 'react';


// Icon Cross close par défault sur la modal
const defaultCloseIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Modal({ 
  isOpen, 
  title, 
  content, 
  handleClose, 
  showCloseLink = true, 
  escapeClose = true,
  enableCloseIconClick = true,
  disableScroll = true, 
  closeIcon = defaultCloseIcon,
  centeredModal = true 
}) {
  
  const modalRef = useRef(null);


  // logique pour empecher de scroller lorsque la modal est ouverte
  useEffect(() => {
    if (disableScroll) {
      const body = document.body;
      body.classList.toggle('no-scroll', isOpen);
  
      return () => body.classList.remove('no-scroll');
    }
  }, [isOpen, disableScroll]);
  
  // logique pour fermer la modale avec ESC
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && escapeClose)  {
        handleClose();
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, escapeClose]);

  // logique pour fermer la modale avec click exterieur modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }
    // Ajoute l'écouteur d'événements au document
    document.addEventListener('mousedown', handleClickOutside);
  
    // Nettoie l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]); // S'assure que le handler ne change pas

  // logique pour autoriser l'utilisation de close icon click
  const handleIconClick = () => {
    if (enableCloseIconClick) {
      handleClose();
    }
  };
  
  return isOpen ? (
    <div className={`modal ${centeredModal ? 'centeredModal' : ''}`} ref={modalRef}>
      <span className="modal__iconClose" onClick={handleIconClick}>
      {closeIcon}
      </span>
      {title && <h2 className="modal__title">
        {title}
      </h2>}
      <div className="modal__content" >
        {content}
        {showCloseLink && (
        <a href="#" onClick={handleClose} className="modal__linkClose">
          Fermer la modal
        </a>
      )}
      </div>
    </div>
    
  ) : null;
}

export default Modal
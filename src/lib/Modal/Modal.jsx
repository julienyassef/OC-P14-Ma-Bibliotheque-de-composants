//scss
import './Modal.scss'

//React
import React, { useEffect, useRef, useState } from 'react';

function Modal({ 
  isOpen, 
  title, 
  content, 
  handleClose, 
  showCloseLink = true, 
  escapeClose = true,
  closeOnClickOutside = true,
  enableCloseIconClick = true,
  disableScroll = true, 
  closeIcon,
  closeClass = '',
  centeredModal = true, 
}) {

  //ref pour accéder au DOm de la modal
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
    const handleClickOutside = (event) => {
      if (closeOnClickOutside && modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose, closeOnClickOutside]); 

  // logique pour autoriser l'utilisation de close icon click
  const handleIconClick = () => {
    if (enableCloseIconClick) {
      handleClose();
    }
  };
  

  return (
    <>
      {<div className="modal-overlay"></div>}
      {isOpen ? (
        <div 
          className={`modal ${centeredModal ? 'centeredModal' : ''}`}
          ref={modalRef}
        >
          <span className={`${closeClass}`}  onClick={handleIconClick}>
            {closeIcon}
          </span>
          {title && <h2 className="modal__title">
            {title}
          </h2>}
          <div className="modal__content">
            {content}
            {showCloseLink && (
              <a href="#" onClick={handleClose} className="modal__linkClose">
                Fermer la modal
              </a>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
} 
  
export default Modal;
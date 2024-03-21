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

/**
 * @param {boolean} isOpen handle the modal state
 * @param {string} title title of the modal
 */
function Modal({ 
  isOpen,
  closePreviousOnOpen,
  title, 
  content, 
  handleClose, 
  closeLink, 
  escapeClose,
  closeOnClickOutside,
  enableCloseIconClick,
  disableScroll, 
  closeIcon = defaultCloseIcon,
  closeClass = 'customClose',
  centeredModal,
  fadeDurationOverlay,
  fadeDelayOverlay,
  fadeDurationModal,
  fadeDelayModal,
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

  //logique pour fermer la modal précédente
  useEffect(() => {
    if (isOpen && closePreviousOnOpen) {
      const modals = document.querySelectorAll('.modal');
      if (modals.length > 1) {
        modals.forEach((modal) => {
          if (modal !== modalRef.current) {
            modal.querySelector('.customClose').click(); // Ferme le modal précédent s'il y en a plus d'un
          }
        });
      }
    }
  }, [isOpen, closePreviousOnOpen, modalRef]);


  return (
    <>
      <div
        style={{
          transitionDuration: `${fadeDurationOverlay/1000}s`,
          transitionDelay: `${fadeDelayOverlay/1000}s`
        }}  
        className={`${isOpen ? 'openOverlay' : ''} overlay`}
      ></div>
      <div 
        className={`${isOpen ? 'openModal' : ''} ${centeredModal ? 'centeredModal' : ''}  modal`}
        style={{
          transitionDuration: `${fadeDurationModal/1000}s`,
          transitionDelay: `${fadeDelayModal/1000}s`,
        }}  
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
          {closeLink && (
            <a href="#" onClick={handleClose} className="modal__linkClose">
              {closeLink}
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
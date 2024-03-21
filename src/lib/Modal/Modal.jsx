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
 * @param {boolean} [closePreviousOnOpen=false] - If true, automatically closes previous modals when a new modal is opened.
 * @param {string} title  The title of the modal. Displayed at the top of the modal content.
 * @param {JSX.Element|string} content - The content of the modal. Can be text, JSX, or any React component.
 * @param {string} [modalClass="modal"] - The CSS class for styling the modal. Allows for custom styling.
 * @param {Function} handleClose - The function to call when the modal needs to be closed. This can be triggered by the close icon, pressing the escape key, or clicking outside the modal (if enabled).
 * @param {string} [closeLink] - Optional text for a close link. If provided, displays a clickable text that closes the modal.
 * @param {boolean} [escapeClose=false] - If true, allows the modal to be closed by pressing the escape key.
 * @param {boolean} [closeOnClickOutside=false] - If true, allows the modal to be closed by clicking outside of its content area.
 * @param {boolean} [enableCloseIconClick=true] - If false, clicking the close icon will not close the modal. 
 * @param {boolean} [disableScroll=false] - If true, disables scrolling of the background content when the modal is open.
 * @param {JSX.Element} [closeIcon=defaultCloseIcon] - Custom JSX for the close icon. Overrides the default icon.
 * @param {string} [closeClass='customClose'] - CSS class for the close button. Allows for custom styling.
 * @param {boolean} [centeredModal=false] - If true, centers the modal in the window.
 * @param {number} [fadeDurationOverlay=0] - Duration of the fade effect for the overlay in milliseconds. Controls how quickly the overlay fades in or out.
 * @param {number} [fadeDelayOverlay=0] - Delay before the fade effect for the overlay starts, in milliseconds.
 * @param {number} [fadeDurationModal=0] - Duration of the fade effect for the modal itself in milliseconds. Controls how quickly the modal content fades in or out.
 * @param {number} [fadeDelayModal=0] - Delay before the fade effect for the modal content starts, in milliseconds.
 */

function Modal({ 
  isOpen,
  closePreviousOnOpen ,
  title, 
  content, 
  modalClasse = "modal",
  handleClose, 
  closeLink, 
  escapeClose = false,
  closeOnClickOutside = false,
  enableCloseIconClick = true,
  disableScroll = false, 
  closeIcon = defaultCloseIcon,
  closeClass = 'customClose',
  centeredModal = false,
  fadeDurationOverlay ,
  fadeDelayOverlay ,
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
        className={`${isOpen ? 'openModal' : ''} ${centeredModal ? 'centeredModal' : ''}  ${modalClasse}`}
        style={{
          ...(isOpen && {
            transitionDuration: `${fadeDurationModal/1000}s`,
            transitionDelay: `${fadeDelayModal/1000}s`,
          })
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
//scss
import './ModalEmployeeCreated.scss'

//React
import { useEffect } from 'react';

const defaultCloseIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Modal({ isOpen, handleClose, title, content, className, disableScroll = true, closeIcon = defaultCloseIcon }) {
  
  
  
  useEffect(() => {
    if (disableScroll) {
      const body = document.body;
      body.classList.toggle('no-scroll', isOpen);
  
      return () => body.classList.remove('no-scroll');
    }
  }, [isOpen, disableScroll]);
  

  return isOpen ? (
    <div className={`modal ${className}`}>
      <div className="modal__content">
        <span className="modal__content__close" onClick={handleClose}>
        {closeIcon}
        </span>
        {title && <h2>{title}</h2>}
        <div>{content}</div>
      </div>
    </div>
  ) : null;
}

export default Modal
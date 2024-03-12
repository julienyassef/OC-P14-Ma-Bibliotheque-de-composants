//scss
import './ModalEmployeeCreated.scss'

//React
import { useEffect } from 'react';

function Modal({ isOpen, handleClose, title, content, className, disableScroll = true }) {
  
  
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
        <span className="modal__content__close" onClick={handleClose}>X</span>
        {title && <h2>{title}</h2>}
        <div>{content}</div>
      </div>
    </div>
  ) : null;
}

export default Modal
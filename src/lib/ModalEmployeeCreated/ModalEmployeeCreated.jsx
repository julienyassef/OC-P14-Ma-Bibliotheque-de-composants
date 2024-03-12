//scss
import './ModalEmployeeCreated.scss'

//React
import { useEffect } from 'react';

function ModalEmployeeCreated({ isOpen, handleClose }) {

    useEffect(() => {
        const body = document.body;
    
        if (isOpen) {
          body.classList.add('no-scroll');
        } else {
          body.classList.remove('no-scroll');
        }
    
      
        return () => {
          body.classList.remove('no-scroll');
        };
      }, [isOpen]); 
    
      if (!isOpen) return null;

  return (
  <div className="modal">
    <div className="modal__content">
        <span className="modal__content__close" onClick={handleClose}>X</span>
        <p className="modal__content__text">Employee Created!</p>
    </div>
  </div>
  )
}
export default ModalEmployeeCreated
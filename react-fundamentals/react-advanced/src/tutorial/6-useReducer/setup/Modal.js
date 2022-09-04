import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {

  useEffect(()=>{
    closeModal();
  },3000);

  return <div className='modal'>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;

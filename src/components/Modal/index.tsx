import React, { MouseEventHandler } from "react";

const Modal = ( { children, title, onClose } : { children: React.ReactNode, title?: React.ReactNode | null, onClose?: MouseEventHandler} ) => (
    <div className='overlay'>
        <div className='modal'>
            {onClose && (
                <button className='modal__close' onClick={onClose}></button>
            )}
            <div className='modal__header'>
                {title && (
                    <h1 className='modal__title'>
                    { title }
                    </h1>                    
                )}
            </div>                
            <div className='modal__inner'>               
                {children}     
            </div>
        </div>
    </div>
);

export default Modal;
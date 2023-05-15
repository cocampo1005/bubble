import React, { useEffect, useRef } from "react";
import './Modal.scss';

export default function Modal({ handleClose, open, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;
        if (open) {
            dialogNode.showModal();
        } else {
            dialogNode.close();
        }
    }, [open]);

    function handleOutsideClick(event) {
        if (event.target === dialogRef.current) {
            handleClose();
        }
    }

    return (
        <dialog
            className={`modal ${open ? 'modal-open' : ''}`}
            ref={dialogRef}
            onClick={handleOutsideClick}
        >
            <div className="modal-content">{children}</div>
        </dialog>
    );
}
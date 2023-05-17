import React, { useState, useRef } from 'react';
import './DropFileInput.scss';
import glTFIcon from '../../assets/icons/glTF-file-Icon.svg';
import { motion } from 'framer-motion';

export default function DropFileInput() {
    const [file, setFile] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(file);
        setFile(e.dataTransfer.files)
    }

    const handleFileChange = (e) => {
        console.log(e);
        console.log(file);
        setFile(e.target.files[0]);
    }

    if (file) return (
        <div className='file-uploaded__box'>
            <img className='file-uploaded__icon' src={glTFIcon} alt='glTF file icon' />
            <p className='file-uploaded__file-name'>uploaded.file</p>
        </div>
    )

    return (
        <>
            {!file && (
                <motion.div 
                className='drop-file-box'
                whileHover={{ scale: 1.02 }}
                whileDrag={{ scale: 1.02 }}
                >
                    <img className='drop-file-box__icon' src={glTFIcon} alt="glTF file icon" />
                    <h4 className='drop-file-box__message'>Drag and Drop your 3D file here</h4>
                    <input
                        // hidden
                        className='drop-file-box__input'
                        type="file"
                        // value=""
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        ref={inputRef}
                        onChange={handleFileChange}
                    />
                </motion.div>
            )}
        </>
    )
}

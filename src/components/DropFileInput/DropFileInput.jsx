import React, { useState, useRef, useEffect } from 'react';
import './DropFileInput.scss';
import glTFIcon from '../../assets/icons/glTF-file-Icon.svg';
import { motion } from 'framer-motion';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';
import { TagInput } from '../TagInput/TagInput';
import successIcon from '../../assets/icons/successful-icon-blue.svg';

export default function DropFileInput({ closeModal }) {

    const inputRef = useRef();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [successfulUpload, setSuccessfulUpload] = useState(false);
    const [metadata, setMetadata] = useState({
        name: "",
        description: "",
        tags: [],
    });

    const resetState = () => {
        setFile(null);
        setFileName("");
        setSuccessfulUpload(false);
        setMetadata({
            name: "",
            description: "",
            tags: [],
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(file);
        setFile(e.dataTransfer.files[0])
        setFileName(e.dataTransfer.files[0].name);
    }

    const handleFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        console.log(file);
    }

    const handleMetadataChange = (e) => {
        setMetadata({ ...metadata, [e.target.name]: e.target.value });
    };

    const uploadFile = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadMetadata = {
            customMetadata: {
                name: metadata.name,
                description: metadata.description,
                tags: JSON.stringify(metadata.tags),
            },
        };

        uploadBytes(storageRef, file, uploadMetadata).then(() => {
            console.log('Uploaded a file with metadata!');
            setSuccessfulUpload(true);
        }).catch(err => console.log(err));
    };

    const handleTagAdd = (tag) => {
        if (tag && !metadata.tags.includes(tag)) {
            setMetadata((prevMetadata) => ({
                ...prevMetadata,
                tags: [...prevMetadata.tags, tag],
            }));
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setMetadata((prevMetadata) => ({
            ...prevMetadata,
            tags: prevMetadata.tags.filter((tag) => tag !== tagToRemove),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file, metadata);
        uploadFile()
        setTimeout(() => {
            resetState();
            closeModal();
        }, 4000);
    };

    if (successfulUpload) return (
        <div className='successful-upload'>
            <h1 className='successful-upload__heading'>Your model was successfully uploaded!</h1>
            <img className='successful-upload__icon' src={successIcon} />
        </div>
    )

    return (
        <>
            {!file ?
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
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        ref={inputRef}
                        onChange={handleFileChange}
                    />
                </motion.div>
                :
                <form className='file-uploaded' onSubmit={handleSubmit}>
                    <div className='file-uploaded__file'>
                        <img className='file-uploaded__file-icon' src={glTFIcon} alt='glTF file icon' />
                        <p className='file-uploaded__file-name'>{fileName}</p>
                    </div>
                    <label className='file-uploaded__name-label file-uploaded-label'>Model Name</label>
                    <input
                        className='file-uploaded__name file-uploaded-input'
                        type="text"
                        name="name"
                        value={metadata.name}
                        onChange={handleMetadataChange}
                        placeholder="Name your model"
                        required
                    />
                    <label className='file-uploaded__description-label file-uploaded-label'>Model Description</label>
                    <textarea
                        className='file-uploaded__description file-uploaded-input'
                        name="description"
                        value={metadata.description}
                        onChange={handleMetadataChange}
                        placeholder="Describe your model"
                        wrap='hard'
                        required
                    />
                    <label className='file-uploaded__tags-label file-uploaded-label'>Model Tags</label>
                    <TagInput
                        tags={metadata.tags}
                        onAddTag={handleTagAdd}
                        onRemoveTag={handleTagRemove}
                    />
                    <motion.button
                        className='file-uploaded__sub-button'
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >Upload</motion.button>
                </form>
            }
        </>
    )
}

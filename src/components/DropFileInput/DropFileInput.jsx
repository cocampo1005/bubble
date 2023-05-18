import React, { useState, useRef, useEffect } from 'react';
import './DropFileInput.scss';
import glTFIcon from '../../assets/icons/glTF-file-Icon.svg';
import { motion } from 'framer-motion';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';
import { TagInput } from '../TagInput/TagInput';

export default function DropFileInput() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [metadata, setMetadata] = useState({
        name: "",
        description: "",
        tags: [],
    });
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(file);
        setFile(e.dataTransfer.files)
        setFileName(e.dataTransfer.files[0].name);
    }

    const handleFileChange = (e) => {
        console.log(e);
        console.log(file);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const handleMetadataChange = (e) => {
        setMetadata({ ...metadata, [e.target.name]: e.target.value });
    };

    const uploadFile = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a file!');
        });
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
        uploadFile();
    }
    // Here you can implement the function to upload the file and its metadata to the db.

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
                    <label className='file-uploaded__name-label'>Model Name</label>
                    <input
                        className='file-uploaded__name'
                        type="text"
                        name="name"
                        value={metadata.name}
                        onChange={handleMetadataChange}
                        placeholder="Name your model"
                        required
                    />
                    <label className='file-uploaded__description-label'>Model Description</label>
                    <textarea
                        className='file-uploaded__description'
                        name="description"
                        value={metadata.description}
                        onChange={handleMetadataChange}
                        placeholder="Describe your model"
                        required
                    />
                    <label className='file-uploaded__tags-label'>Model Tags</label>
                    <TagInput
                        tags={metadata.tags}
                        onAddTag={handleTagAdd}
                        onRemoveTag={handleTagRemove}
                    />
                    <button
                        className='file-uploaded__sub-button'
                        type="submit"
                    >Upload</button>
                </form>

            }
        </>
    )
}

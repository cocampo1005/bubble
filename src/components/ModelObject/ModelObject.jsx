import { useState, useEffect, useRef } from 'react';
import './ModelObject.scss';
import { motion } from 'framer-motion';

function ModelObject({ model }) {
    const { creator, name, src } = model;
    const [isClicked, setIsClicked] = useState(false);
    const modelRef = useRef();

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleOutsideClick = (event) => {
        if (!modelRef.current.contains(event.target)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className='object' ref={modelRef}>
            <motion.div
                className={`object__container ${isClicked ? 'object__container--large' : ''}`}
                whileHover={{ scale: 1.05 }}
            >
                <iframe src={src}></iframe>
            </motion.div>
            <motion.p
                className='object__info-name'
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                {name}
            </motion.p>
            <p>
                by <span className='object__info-creator'>{creator}</span>
            </p>
        </div>
    )
}

export default ModelObject;

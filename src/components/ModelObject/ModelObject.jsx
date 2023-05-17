import { useState, useEffect, useRef } from 'react';
import './ModelObject.scss';

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
            <div className={`object__container ${isClicked ? 'object__container--large' : ''}`}>
                <iframe src={src}></iframe>
            </div>
            <p className='object__info'>
                <span className='object__info-name' onClick={handleClick}>{name}</span>
            </p>
            <p>
                by <span className='object__info-creator'>{creator}</span>
            </p>
        </div>
    )
}

export default ModelObject;

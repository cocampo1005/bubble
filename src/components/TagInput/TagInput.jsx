import './TagInput.scss';
import { useState } from "react";
import { ReactComponent as X } from "../../assets/icons/close-24px.svg";
import { motion } from 'framer-motion';

export function TagInput({ tags, onAddTag, onRemoveTag }) {

    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (input) {
                onAddTag(input);
                setInput("");
            }
        }
    }

    // const handleAddTagClick = () => {
    //     if (input) {
    //         onAddTag(input);
    //         setInput("");
    //     }
    // }

    return (
        <div className="tags">
            <div className='tags__tags'>
                {tags.map((tag) => (
                    <div className="tags__tags-wrap" key={tag}>
                        <p className='tags__tags-text'>{tag}</p>
                        <div className='tags__tags-x--background'>
                            <X className='tags__tags-x' onClick={() => onRemoveTag(tag)} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="tags__form">
                <input
                    className="tags__form-input"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a tag and hit enter. Add as many as you'd like."
                />
                {/* <motion.button
                    className="tags__form-button"
                    onClick={handleAddTagClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Add Tag
                </motion.button> */}
            </div>
        </div>
    );
}

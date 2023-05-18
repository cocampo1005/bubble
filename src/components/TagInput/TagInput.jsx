import { useState } from "react";


export function TagInput({ tags, onAddTag, onRemoveTag }) {
    const [input, setInput] = useState("");

    const handleInputSubmit = (e) => {
        e.preventDefault();
        onAddTag(input);
        setInput("");
    };

    return (
        <div>
            {tags.map((tag) => (
                <div key={tag}>
                    {tag}
                    <button onClick={() => onRemoveTag(tag)}>x</button>
                </div>
            ))}
            <form onSubmit={handleInputSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a tag..."
                />
            </form>
        </div>
    );
}
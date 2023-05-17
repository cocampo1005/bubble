import React, { useState, useEffect } from 'react';
import './HomeBrowseState.scss';
import ModelObject from '../ModelObject/ModelObject';
import models from '../../data/modelsData.json';
import { motion } from 'framer-motion';

export default function HomeBrowseState() {
  const [input, setInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selected, setSelected] = useState('');
  const [filteredModels, setFilteredModels] = useState(models);

  useEffect(() => {
    setFilteredModels(
      models.filter(model =>
        model.tags.some(tag => tag.includes(input)) &&
        (selectedTags.length === 0 || selectedTags.some(selectedTag => model.tags.includes(selectedTag)))
      )
    );
  }, [input, selectedTags]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleTagClick = (tags, selectedButton) => {
    setSelectedTags(tags);
    setSelected(selectedButton)
  }

  const handleResetFilter = () => {
    setInput('');
    setSelectedTags([]);
    setSelected('');
  }

  return (
    <>

      <div className='home-browse__filters'>

        <div className='home-browse__filters-heading'>
          <h1 className='home-browse__filters-title'>Filters:</h1>
          <input
            className='home-browse__filters-search'
            type="text"
            placeholder="Filter by tag..."
            onChange={handleInputChange}
          />
          <motion.button
            className='home-browse__filters-button-reset'
            onClick={handleResetFilter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Reset Filter
          </motion.button>
        </div>

        <div className='home-browse__filters-buttons'>
          <motion.button
            className={`home-browse__filters-button ${selected === 'realistic' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['realistic'], 'realistic')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Realistic
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'stylized' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['stylized'], 'stylized')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Stylized
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'animal' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['animal'], 'animal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Animals
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'car' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['car', 'vehicle', 'ship'], 'car')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Cars & Vehicles
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'abstract' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['abstract', 'art'], 'abstract')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Art & Abstarct
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'food' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['food', 'drink'], 'food')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Food & Drink
          </motion.button>
          <motion.button
            className={`home-browse__filters-button ${selected === 'character' ? 'selected' : ''}`}
            onClick={() => handleTagClick(['character'], 'character')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Characters
          </motion.button>
        </div>
      </div>

      <div className='home-browse__catalog'>
        {filteredModels.slice(0, 30).map(model => (
          <ModelObject key={model.id} model={model} />
        ))}
      </div>
    </>
  )
}
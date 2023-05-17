import React, { useState, useEffect } from 'react';
import './HomeBrowseState.scss';
import ModelObject from '../ModelObject/ModelObject';
import models from '../../data/modelsData.json';

export default function HomeBrowseState() {
  const [input, setInput] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
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

  const handleTagClick = (tags) => {
    setSelectedTags(tags);
  }

  const handleResetFilter = () => {
    setInput('');
    setSelectedTags([]);
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
          <button className='home-browse__filters-button-reset' onClick={handleResetFilter}>Reset Filter</button>
        </div>

        <div className='home-browse__filters-buttons'>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['realistic'])}>
            Realistic
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['stylized'])}>
            Stylized
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['animal'])}>
            Animals
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['car', 'vehicle', 'ship'])}>
            Cars & Vehicles
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['abstract', 'art'])}>
            Art & Abstarct
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['food', 'drink'])}>
            Food & Drink
          </button>
          <button
            className='home-browse__filters-button'
            onClick={() => handleTagClick(['character'])}>
            Characters
          </button>
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
import React, { useState } from 'react';
import '../css/Filter.css';

const Filter = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    Seed: { Rice: false, Wheat: false },
    Fertilizers: { Nitrogen: false, Phosphorus: false },
    Pesticides: { Insecticides: false, Herbicides: false },
    Equipment: { Tractor: false, Plow: false }
  });

  const handleOptionChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], [value]: checked }
    }));
  };

  return (
    <div className="filter">
      <h3>Filter</h3>
      <details>
        <summary>Seed</summary>
        <div>
          <label>
            <input
              type="checkbox"
              name="Seed"
              value="Rice"
              checked={selectedOptions.Seed.Rice}
              onChange={handleOptionChange}
            />
            Rice
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="Seed"
              value="Wheat"
              checked={selectedOptions.Seed.Wheat}
              onChange={handleOptionChange}
            />
            Wheat
          </label>
        </div>
      </details>
      <details>
        <summary>Fertilizers</summary>
        <div>
          <label>
            <input
              type="checkbox"
              name="Fertilizers"
              value="Nitrogen"
              checked={selectedOptions.Fertilizers.Nitrogen}
              onChange={handleOptionChange}
            />
            Nitrogen
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="Fertilizers"
              value="Phosphorus"
              checked={selectedOptions.Fertilizers.Phosphorus}
              onChange={handleOptionChange}
            />
            Phosphorus
          </label>
        </div>
      </details>
      <details>
        <summary>Pesticides</summary>
        <div>
          <label>
            <input
              type="checkbox"
              name="Pesticides"
              value="Insecticides"
              checked={selectedOptions.Pesticides.Insecticides}
              onChange={handleOptionChange}
            />
            Insecticides
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="Pesticides"
              value="Herbicides"
              checked={selectedOptions.Pesticides.Herbicides}
              onChange={handleOptionChange}
            />
            Herbicides
          </label>
        </div> 
      </details> 
      <details> 
        <summary>Equipment</summary> 
        <div> 
          <label> 
            <input 
              type="checkbox" 
              name="Equipment" 
              value="Tractor" 
              checked={selectedOptions.Equipment.Tractor} 
              onChange={handleOptionChange} 
            /> 
            Tractor 
          </label> 
        </div> 
        <div> 
          <label> 
            <input 
              type="checkbox" 
              name="Equipment" 
              value="Plow" 
              checked={selectedOptions.Equipment.Plow} 
              onChange={handleOptionChange} 
            /> 
            Plow 
          </label> 
        </div>  
      </details>  
    </div>  
  );
};

export default Filter;
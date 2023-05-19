import React, { useState } from 'react';

const ChildComponent = ({ onDataChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onDataChange(event.target.value);
  };

  return (
    <div className='chil'>
      <h3>This is Child Component</h3>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default ChildComponent;
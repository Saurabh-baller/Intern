import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (


    <div className='parent' >
      <div className='q6 '>
        <h1>Question 6</h1>
        I've used useState hooks and callback function to pas the data from child to parent
        
      </div>
    <div className='q6sol'>
    
      <ChildComponent onDataChange={handleDataChange} />
      <h2>This is Parent Component</h2>
      <p>Data from child component: {data}</p>
    </div>
    </div>
  );
};

export default ParentComponent;
import React, { useState, ChangeEvent } from 'react';


interface FunctionComponentProps {}


const FunctionComponent: React.FC<FunctionComponentProps> = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };

  return (
    <div className='function1'>
      <div >
      <h1>Question 1</h1>
          <h3>This is from Functional Component</h3>
          <p> This component allows users to enter their name and age, and it updates the component's state accordingly. The entered values are then displayed below the input fields.</p>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" value={name} onChange={handleNameChange} />
      </div>
      <div className='1font'>
        <label htmlFor="age-input">Age:</label>
        <input type="number" id="age-input" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>
      </div>
    </div>
  );
};

export default FunctionComponent;
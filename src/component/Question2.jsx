import React from "react";
import { useState } from "react";

const Question2 = () => {
  const [value, setValue] = useState(0);

  const Increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="question2">
      <div className="Q2ques">
        <p>
          <h1>Question 2</h1>
          Used useState hook to update the value of count in a functional
          component
        </p>
      </div>

      <div className="Q2sol">
        <button onClick={Increment}>Increment</button>
        {value}
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Question2;

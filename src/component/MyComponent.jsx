import React, { useState, useEffect, useCallback, useContext } from "react";


const MyContext = React.createContext("");

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 5);
  }, []);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const contextValue = useContext(MyContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <p>Context Value: {contextValue}</p>
    </div>
  );
};

const ContextComponent = () => {
  return (
    <div className="question2" >
      <div className="Q31" >
        <h1>Question 3</h1>
        <p>
          The useState hook manages component state, the useEffect hook handles
          side effects, the useCallback hook memoizes functions, and the
          useContext hook provides access to a context value.
        </p>
      </div>
      <div className="Q3l" >
        <MyContext.Provider value="Context Example">
          <MyComponent />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default ContextComponent;

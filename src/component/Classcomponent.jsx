import React, { Component, ChangeEvent } from "react";


interface ClassComponentProps {}


interface ClassComponentState {
  name: string;
  age: number;
}

// Define the class component
class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: parseInt(event.target.value) });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div className="claassc">
        <div>
          <h1>Question 1</h1>
          <h3>This is from Class Component</h3>
          <p>
            {" "}
            This component allows users to enter their name and age, and it
            updates the component's state accordingly. The entered values are
            then displayed below the input fields.
          </p>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="font1">
          <label htmlFor="age-input">Age:</label>
          <input
            type="number"
            id="age-input"
            value={age}
            onChange={this.handleAgeChange}
          />
        </div>
        <div>
          <h1>Hello, {name}!</h1>
          <p>You are {age} years old.</p>
        </div>
      </div>
    );
  }
}

export default ClassComponent;

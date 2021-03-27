import React, { Component } from "react";

class AddTest extends Component {
  state = {
    name: "",
    age: "",
    job: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTest(this.state);
    e.target.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="job">job:</label>
          <input type="text" id="job" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <div>
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default AddTest;

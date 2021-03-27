import React, { Component } from "react";
import Test from "./Test";
import AddTest from "./AddTest";

class TestApp extends Component {
  state = {
    people: [
      { name: "devorah", age: 30, job: "prophetess", id: 1 },
      { name: "Joshua", age: 100, job: "new leader", id: 2 },
      { name: "Moses", age: 90, job: "leader", id: 3 },
    ],
  };
  addTest = (test) => {
    test.id = Math.random();
    let people = [...this.state.people, test];
    this.setState({
      people,
    });
  };
  deleteTest = (id) => {
    let people = this.state.people.filter((person) => person.id !== id);
    this.setState({
      people,
    });
  };
  render() {
    return (
      <div>
        <AddTest addTest={this.addTest} />
        <Test people={this.state.people} deleteTest={this.deleteTest} />
      </div>
    );
  }
}

export default TestApp;

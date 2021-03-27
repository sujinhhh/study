import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

export default class TodoRoot extends Component {
  state = {
    todos: [
      { id: 1, content: "Study git" },
      { id: 2, content: "Study React Redux" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos,
    });
  };

  addTodos = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodos={this.addTodos} />
      </div>
    );
  }
}

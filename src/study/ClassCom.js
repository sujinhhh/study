import React, { Component } from "react";

class ClassCom extends Component {
  state = {
    name: "sujin",
    job: "programmer",
  };

  handleClick = (e) => {
    this.setState({
      name: "kevin",
      job: "singer",
    });
    console.log(this.state.job);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <h1> {this.state.name}</h1>
        <button onClick={this.handleClick}>Click</button>
        {/* 위치 알아내기 */}
        <button onMouseOver={(e) => console.log(e.target, e.pageX, e.pageY)}>
          좌표 알아내기
        </button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassCom;

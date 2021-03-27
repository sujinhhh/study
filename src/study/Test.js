import React, { Component } from "react";

const Test = ({ people, deleteTest }) => {
  return (
    <div>
      {people.map((person) => {
        return person.age > 50 ? (
          <div key={person.id}>
            <h1>name : {person.name}</h1>
            <h1>job : {person.job}</h1>
            <button onClick={() => deleteTest(person.id)}>Delete</button>
          </div>
        ) : null;
      })}
    </div>
  );
};
export default Test;

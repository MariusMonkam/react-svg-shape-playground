import React from "react";
import "./styles.css";
import Circle from "./Circle";

export default function App() {
  return (
    <div className="App">
      <h1>React Shape Playground</h1>
      {/* create an array on the fly with the spread Array method
       and map trough the array  to generate multiple circle*/}

      <Circle />
    </div>
  );
}

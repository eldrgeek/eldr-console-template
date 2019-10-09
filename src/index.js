import React, { Component } from "react";
import { render } from "react-dom";
import { TheConsole } from "./Console/Console";
import Test from "./demo/Other";
const App = () => {
  return (
    <div>
      <Test />
      <button onClick={() => console.log("clicked")}>Click</button>
      <button
        onClick={() => {
          console.log("ouch");
          TheConsole.clearConsole();
        }}
      >
        Clear
      </button>
      <TheConsole />;{/* <Test /> */}
      {/* <Test />
    <Test />
    <Test /> */}
      xxxx
    </div>
  );
};
setTimeout(() => console.log("timeout"), 2000);

render(<App />, document.getElementById("root"));

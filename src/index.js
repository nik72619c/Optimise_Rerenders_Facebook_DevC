import React from "react";
import ReactDOM from "react-dom";
import Mycomponent from "./mycomponent";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parentProp: "this is parent prop"
    };
  }

  render() {
    return (
      <div className="App">
        <Mycomponent />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

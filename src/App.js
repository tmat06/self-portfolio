import React, { Component } from "react";
import "./App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Timothy Matthews"
    };
  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <Projects />
      </div>
    );
  }
}

export default App;

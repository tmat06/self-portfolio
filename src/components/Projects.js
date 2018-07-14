import React from "react";
import ProjectDisplay from "./ProjectDisplay";

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="project">
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
      </div>
    );
  }
}

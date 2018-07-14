import React from "react";
import ProjectDisplay from "./ProjectDisplay";

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project1: {
        name: "Restaurant Roulette",
        pictures: {
          pic1: "/images/Title-Screen.PNG",
          pic2: "/images/Results.PNG",
          pic3: "/images/Profile.PNG",
          pic4: "/images/google-maps.PNG"
        },
        description: "This is my project"
      }
    };
  }

  render() {
    return (
      <div className="project">
        <div className="project-3-row">
          <ProjectDisplay project={this.state.project1} />
          <ProjectDisplay project={this.state.project1} />
          <ProjectDisplay project={this.state.project1} />
        </div>
        <div className="project-3-row">
          <ProjectDisplay project={this.state.project1} />
          <ProjectDisplay project={this.state.project1} />
          <ProjectDisplay project={this.state.project1} />
        </div>
        {/* <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay />
        <ProjectDisplay /> */}
      </div>
    );
  }
}

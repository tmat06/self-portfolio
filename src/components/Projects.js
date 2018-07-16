import React from "react";
import ProjectDisplay from "./ProjectDisplay";

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Restaurant Roulette",
          pictures: {
            pic1: "/images/Title-Screen.PNG",
            pic2: "/images/Results.PNG",
            pic3: "/images/Profile.PNG",
            pic4: "/images/google-maps.PNG"
          },
          description: "This is my project"
        },
        {
          name: "test",
          pictures: {
            pic1: "/images/Results.PNG"
          },
          description: "hello"
        },
        {
          name: "test",
          pictures: {
            pic1: "/images/Results.PNG"
          },
          description: "hello"
        },
        {
          name: "test",
          pictures: {
            pic1: "/images/Results.PNG"
          },
          description: "hello"
        }
      ]
    };
  }

  render() {
    return (
      <div className="project">
        {this.state.projects.map((val, i) => {
          return (
            <ProjectDisplay
              key={i}
              project={val}
              openModal={this.props.openModal}
            />
          );
        })}
      </div>
    );
  }
}

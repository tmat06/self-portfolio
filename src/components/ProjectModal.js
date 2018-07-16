import React from "react";

export default class ProjectDisplay extends React.Component {
  render() {
    const { project } = this.props;
    if (project) {
      return (
        <div
          style={{ height: "100%", overflow: "scroll", overflowX: "hidden" }}
        >
          <h1>{project.name ? project.name : ""}</h1>
          <h3>{project.description ? project.description : ""}</h3>
          <img
            src="/images/restaurant-roulette-intro.gif"
            alt="restaurant roulette title"
            style={{ height: 600, width: 800 }}
          />
          <img
            src="/images/restaurant-roulette-intro.gif"
            alt="restaurant roulette title"
            style={{ height: 600, width: 800 }}
          />
        </div>
      );
    } else {
      return <div>Dog</div>;
    }
  }
}

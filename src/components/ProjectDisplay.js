import React from "react";

export default class ProjectDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: 1,
      height: 300
    };
  }
  render() {
    return (
      <div className="project-display-container">
        <div className="project-display-title-and-image">
          <div className="project-display-title">{this.props.project.name}</div>
          <div
            className="project-image-container"
            style={{ opacity: this.state.hover }}
            onMouseOver={() => this.setState({ hover: "0.7" })}
            onMouseOut={() => this.setState({ hover: 1 })}
          >
            <img
              src={this.props.project.pictures.pic1}
              className="project-display-image"
            />
          </div>
        </div>
        <p style={{ width: "30vw", margin: 15 }}>
          {this.props.project.description}
        </p>
      </div>
    );
  }
}

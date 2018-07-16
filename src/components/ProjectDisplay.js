import React from "react";

export default class ProjectDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: 1
    };
  }
  render() {
    return (
      <div
        className="project-display-container"
        onClick={() => this.props.openModal(this.props.project)}
      >
        <div
          className="project-display-title-and-image"
          style={{ opacity: this.state.hover }}
        >
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
              alt={`${this.props.project.name} Title Screen`}
            />
          </div>
        </div>
        {/* <p
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "20px",
            boxSizing: "border-box"
          }}
        >
          {this.props.project.description}
        </p> */}
      </div>
    );
  }
}

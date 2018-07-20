import React from "react";

export default class ProjectDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: 1
    };
  }
  render() {
    console.log("this.props.project", this.props.project);
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src={this.props.project.pictures.pic1}
          alt="project Title Screen"
          style={{ width: "80vw" }}
        />
        <p className="project-display-image-description">
          abcde­fghijklmnopqrstu­vwxyz­abcde­fghijklmnopqrstu­vwxyz­abcd
          dog1Duis ea laborum dolor fugiat. Culpa eiusmod dolor enim est do. Ad
          proident cupidatat cillum labore amet officia anim. Quis quis culpa
          nulla magna aliquip aliquip. Ipsum ipsum sunt ullamco id nulla
          cupidatat proident sunt voluptate dolore ut. Voluptate magna id duis
          cupidatat excepteur eu reprehenderit consectetur sint. Exercitation
          proident nostrud culpa magna adipisicing laborum quis nulla commodo.
          Proident exercitation reprehenderit cillum excepteur et reprehenderit
          dolore adipisicing elit. Eiusmod in consectetur aute deserunt
          excepteur commodo nisi aliqua aute eu eiusmod in cupidatat.
        </p>
      </div>
    );
  }
}

import React from "react";

export default class SkillImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    // console.log("this.props", this.props.skill);
    return (
      <div style={{ margin: 15 }}>
        <h2>{this.props.skill.name}</h2>
        <img src={this.props.skill.icon} style={{ height: 100, width: 100 }} />
      </div>
    );
  }
}

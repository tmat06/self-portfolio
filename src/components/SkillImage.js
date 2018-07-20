import React from "react";

export default function SkillImage(props) {
  // console.log("this.props", this.props.skill);
  return (
    <div style={{ margin: 15 }}>
      <h2>{props.skill.name}</h2>
      <img
        src={props.skill.icon}
        style={{ height: 100, width: 100 }}
        alt={`${props.skill.name} icon`}
      />
    </div>
  );
}

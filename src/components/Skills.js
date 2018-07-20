import React from "react";
import SkillImage from "./SkillImage";

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    this.setState({ skills: [...this.props.skills] });
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: 800,
          backgroundColor: "pink",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        {this.state.skills.map((val, i) => {
          return <SkillImage skill={val} key={i} />;
        })}
      </div>
    );
  }
}

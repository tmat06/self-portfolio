import React from "react";
import { Motion, spring } from "react-motion";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Motion
        defaultStyle={{ x: -100, opacity: 0 }}
        style={{
          x: spring(1, { precision: 0.1, damping: 80 }),
          opacity: spring(1, { damping: 100 })
        }}
      >
        {style => {
          return (
            <div className="header">
              <p
                className="header-title"
                style={{
                  opacity: style.opacity,
                  transform: `translateY(${style.x}px`
                }}
              >
                {this.props.name}
              </p>
              <p
                className="header-sub-title"
                style={{
                  opacity: style.opacity,
                  transform: `translateY(${style.x}px`
                }}
              >
                Full Stack Web Developer
              </p>
            </div>
          );
        }}
      </Motion>
    );
  }
}

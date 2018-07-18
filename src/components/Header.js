import React from "react";
import { Motion, spring } from "react-motion";
import { Parallax, Background } from "react-parallax";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Motion
        defaultStyle={{ x: -500, opacity: 0 }}
        style={{
          x: spring(1, { precision: 0.1, damping: 100 }),
          opacity: spring(1, { damping: 100 })
        }}
      >
        {style => {
          return (
            <Parallax
              strength={600}
              bgImage="/images/officeWallpaper.jpg"
              bgWidth="100%"
              bgHeight="100vh"
              blur="2.5"
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                // flexDirection: "column"
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div>
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
              {/* <Background className="custom-bg">
                <img
                  src="/images/officeWallpaper.jpg"
                  alt="fill murray"
                  style={{ height: "100vh", width: "100%" }}
                />
              </Background> */}
            </Parallax>
          );
        }}
      </Motion>
    );
  }
}

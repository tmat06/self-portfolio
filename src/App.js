import React, { Component } from "react";
import "./App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Modal from "react-awesome-modal";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Timothy Matthews",
      visible: false,
      skills: [
        { name: "REACT", icon: "/images/React.png" },
        { name: "NODE", icon: "/images/node.png" },
        { name: "EXPRESS", icon: "/images/express.png" },
        { name: "VUE", icon: "/images/vue.png" },
        { name: "HTML", icon: "/images/html.png" },
        { name: "POSTGRESQL", icon: "/images/postgresql.png" },
        { name: "CSS", icon: "/images/css.png" },
        { name: "JAVASCRIPT", icon: "/images/javascript.png" },
        { name: "GIT", icon: "/images/git.png" }
      ]
      // show: false
      // scroll: true
    };
  }

  componentDidMount() {
    // window.addEventListener("scroll", e =>
    //   this.setState({ scroll: !this.state.scroll })
    // );
  }

  openModal(project) {
    // console.log("clicked", project.name);
    this.setState({ project: project }, () => this.setState({ visible: true }));
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <Projects openModal={this.openModal.bind(this)} />
        <Modal
          visible={this.state.visible}
          width="70%"
          height="80%"
          effect="fadeInUp"
          style={{ overflow: "scroll" }}
          onClickAway={() => this.setState({ visible: false })}
        >
          <ProjectModal project={this.state.project} />
        </Modal>
        <Skills skills={this.state.skills} />
      </div>
    );
  }
}

export default App;

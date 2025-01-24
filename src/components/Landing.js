import React from "react";
import { navigate } from "@reach/router";
import logo from "../media/logo.png";
import "../App.css";
import "../Anime.scss";
import resumeData from './resumeData';
import Fade from 'react-reveal/Fade';
import ReactLoading from "react-loading";
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
    }, 1200);
  }

  render() {
  return (
    <div>
      {!this.state.done ? (
        <div style={{height:"100vh",display: "flex",justifyContent: "center",alignItems: "center"}}>
          <ReactLoading type={"bars"} color={"white"} height={"200px"} width={"200px"}/>
          </div>
        ) : (
    <div className="bg">
        <div className="wrap">
      <div className="container">
      <Fade effect="fadeInUp" delay={1000}>
        <img src={logo} className="land-logo" alt="Logo" />
        </Fade>
        <br />
        <Fade effect="fadeInUp" delay={1500}>
        <div className="section three">
          <div id="button" onClick={nav}>
            Enter
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
            <div className="ring four"></div>
          </div>
        </div>
        </Fade>
        <br />
      </div>
      <Fade effect="fadeInUp" delay={2000}>
      <footer style={{marginBottom:"0px"}}>
      <div className="row" style={{paddingTop:"175px"}}>
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item,i) => {
                return (
                  <li key={i}>
                    <a href={item.url} rel="noopener noreferrer" target="_blank">
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </footer>
    </Fade>
    </div>
    </div>)}
    </div>
  );
}
}

function nav() {
  navigate("/home");
  return window.location.reload(false);
}

import React from "react";
import { navigate } from "@reach/router";
import logo from "../media/logo.png";
import "../App.css";
import "../Anime.scss";
import resumeData from './resumeData';
import Fade from 'react-reveal/Fade';
export default function Landing() {
  return (
    <div className="bg">
      <wrapper className="wrap">
      <div className="container">
      <Fade effect="fadeInUp">
        <img src={logo} className="land-logo" alt="Logo" />
        </Fade>
        <br />
        <div class="section three">
          <div id="button" onClick={nav}>
            Enter
            <div class="ring one"></div>
            <div class="ring two"></div>
            <div class="ring three"></div>
            <div class="ring four"></div>
          </div>
        </div>
        <br />
      </div>
      <Fade effect="fadeInUp">
      <footer style={{marginBottom:"0px"}}>
      <div className="row" style={{paddingTop:"175px"}}>
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map(item => {
                return (
                  <li>
                    <a href={item.url}>
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
    </wrapper>
    </div>
  );
}

function nav() {
  navigate("/home");
  return window.location.reload(false);
}

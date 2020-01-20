import React from "react";
import { navigate } from "@reach/router";
import logo from "../media/logo.png";
import "../App.css";
import "../Anime.scss";
import resumeData from './resumeData';
export default function Landing() {
  return (
    <div className="bg">
      <wrapper className="wrap">
      <div className="container">
        <img src={logo} className="land-logo" alt="Logo" />
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
    </wrapper>
    </div>
  );
}

function nav() {
  navigate("/home");
  return window.location.reload(false);
}

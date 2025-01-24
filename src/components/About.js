import React from "react";
import "../App.css";
import ScrollAnimation from 'react-animate-on-scroll';
export default function About(props) {
  let resumeData = props.resumeData;
  return (
    <section id="about">
      <div className="row">
      <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2 className="About-text">About Me</h2>
          <p className="About-text" style={{ textAlign: "left" }}>
            {resumeData.roleDescription}
          </p>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

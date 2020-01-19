import React from "react";
import "../App.css";
export default function About(props) {
  let resumeData = props.resumeData;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2 className="About-text">About Me</h2>
          <p className="About-text" style={{ textAlign: "left" }}>
            {resumeData.roleDescription}
          </p>

          <div className="row">
            <div className="columns contact-details">
              <h2 className="About-text">Contact Details</h2>
              <br />
              <p className="address">
                <span className="About-text">Mobile Number: +813-317-4423</span>
                <br />
                <span className="About-text">
                  Location: {resumeData.address}
                </span>
                <br />
                <span className="About-text">
                  Nationality: American-Egyptian
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

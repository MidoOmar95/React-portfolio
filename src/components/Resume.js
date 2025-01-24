import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
export default function Resume(props) {
  let resumeData = props.resumeData;
  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
          {resumeData.education &&
            resumeData.education.map((item,i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                      <span>&bull;</span>{" "}
                      <em className="date">{item.Location}</em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
            </ScrollAnimation>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work Experience</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item,i) => {
              return (
                <ScrollAnimation animateIn='bounceInRight' animateOnce={true} key={i}>
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">{item.JobType}</em>
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfStarting} {item.YearOfStarting}
                      </em>{" "}
                      -
                      <em className="date">
                        {" "}
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                      <span>&bull;</span> <em>{item.duration}</em>
                      <span>&bull;</span>{" "}
                      <em style={{ fontWeight: "bold" }}>{item.Location}</em>
                    </p>
                    <p>{item.line1}</p>
                    <p>{item.line2}</p>
                    <p>{item.line3}</p>
                  </div>
                </div>
                </ScrollAnimation>
              );
            })}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Leadership</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.leadership &&
            resumeData.leadership.map((item,i) => {
              return (
                <ScrollAnimation animateIn='bounceInRight' animateOnce={true} key={i}>
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfStarting} {item.YearOfStarting}
                      </em>{" "}
                      -
                      <em className="date">
                        {" "}
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                      <span>&bull;</span> <em>{item.duration}</em>
                      <span>&bull;</span>{" "}
                      <em style={{ fontWeight: "bold" }}>{item.Location}</em>
                    </p>
                    <p>{item.line1}</p>
                    <p>{item.line2}</p>
                    <p>{item.line3}</p>
                  </div>
                </div>
                </ScrollAnimation>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Certifications</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {resumeData.certs &&
                resumeData.certs.map((item,i) => {
                  return (
                    <ScrollAnimation animateIn='flipInY' animateOnce={true} style={{margin:"15px",display:"inline-block",textAlign:"center"}} key={i}>
                      <button style={{marginBottom:"0px",height:"75px",width:"75px"}}>
                    <img
                      src={item.logo}
                      style={{ height: "45px", width:"100%", paddingTop: "1px" }}
                      alt="Lang"
                    />
                    </button>
                    <p style={{fontSize:"15px"}}>{item.name}</p>
              </ScrollAnimation>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Languages</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {resumeData.lang &&
                resumeData.lang.map((item,i) => {
                  return (
                    <ScrollAnimation animateIn='flipInY' animateOnce={true} style={{margin:"15px",display:"inline-block",textAlign:"center"}} key={i}>
                      <button style={{marginBottom:"0px",height:"75px",width:"75px"}}>
                    <img
                      src={item.logo}
                      style={{ height: "45px", width:"100%", paddingTop: "1px" }}
                      alt="Lang"
                    />
                    </button>
                    <p style={{fontSize:"15px"}}>{item.name}</p>
              </ScrollAnimation>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Technologies</span>
          </h1>
          <p style={{textAlign:"left"}}>Click on a Technology to learn more!</p>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {resumeData.tech &&
                resumeData.tech.map((item,i) => {
                  return (
                    <ScrollAnimation animateIn='flipInY' animateOnce={true} style={{display:"inline-block",textAlign:"center"}} key={i}>
                      <button style={{margin:"10px",marginBottom:"0px",height:"75px",width:"75px"}} onClick={()=> window.open(item.link, "_blank")}>
                    <img
                      src={item.logo}
                      style={{ height: "45px", width:"100%", paddingTop: "1px" }}
                      alt="Tech"
                    />
                    </button>
                    <p style={{fontSize:"15px"}}>{item.name}</p>
                  </ScrollAnimation>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

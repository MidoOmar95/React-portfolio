import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
export default function Porfolio(props) {
  let resumeData = props.resumeData;
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
          <h1>Check Out Some of My Work!</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf">
            {resumeData.portfolio &&
              resumeData.portfolio.map(item => {
                return (
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <button style={{height:"55px",width:"100px", marginTop:"50px", fontSize:"15px"}} onClick={()=> window.open(item.link, "_blank")}><p>View Project</p></button>
                          </div>
                        </div>
                    </div>
                  </div>
                );
              })}
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
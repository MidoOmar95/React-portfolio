import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
export default function ContactUs(){
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
            <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
              <p className="lead" style={{alignContent:"center", color:"white"}}>
              Feel free to contact me or view my other profiles using the icons below!
              </p>
              <p className="lead" style={{alignContent:"center", color:"white"}}>Or to download my resume: <button  onClick={()=> window.open("https://docs.google.com/document/d/1xI5o4Zud9TVOSZ7k7GqyhJvY9-eNFBZSlvPVsDkcuXA/edit?usp=sharing", "_blank")}>Click Here!</button></p>
            </ScrollAnimation>
            </div>
          </div>
        </section>
        );
  }

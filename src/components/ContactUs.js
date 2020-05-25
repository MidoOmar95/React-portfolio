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
              <p className="lead" style={{alignContent:"center", color:"white"}}>Or to download my resume: <button  onClick={()=> window.open("https://drive.google.com/file/d/1fPrLXRCy66PW9ji0aSqw5B2jqfuiFQpB/view?usp=sharing", "_blank")}>Click Here!</button></p>
            </ScrollAnimation>
            </div>
          </div>
        </section>
        );
  }

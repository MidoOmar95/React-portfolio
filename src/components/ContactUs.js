import React from 'react';
export default function ContactUs(){
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{alignContent:"center"}}>
              Feel free to contact me or view my other profiles using the icons below!
              </p>
              <p className="lead" style={{alignContent:"center"}}>Or to download my Resume: <button  onClick={()=> window.open("https://drive.google.com/file/d/1pbOBEO-VnTfVAh02VEoo7gGhDZnb3qX7/view?usp=sharing", "_blank")}>Click Here!</button></p>
            </div>
          </div>
        </section>
        );
  }

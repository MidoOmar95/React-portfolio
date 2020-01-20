import React from 'react';
import logo from '../media/logo.png'
import'../App.css'
import ScrollAnimation from 'react-animate-on-scroll';
export default function Header(props){
    let resumeData = props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" title="Hide navigation" href="/#">Hide navigation</a>
            <ul id="nav" className="nav">
            <img src={logo} style={{height:"50px", width:"auto",float:"left", paddingTop:"5px", paddingLeft:"20px",paddingBottom:"5px"}} alt="Logo"/>
               <ul style={{textAlign:"right", paddingRight:"50px"}}>
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            </ul>
         </nav>
         <div className="row banner">
         <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className="banner-text">
            <img src={logo} className="logo-size" alt="Logo" />
               <h1 className="responsive-headline">{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Full-Stack Software Engineer</h3>
               <hr/>
               <ul className="social">
                  {resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                    return(<li key={item.name}> <a href={item.url} rel="noopener noreferrer" target="_blank"><i className={item.className}></i></a> </li>)})}
               </ul>
            </div>
         </ScrollAnimation>      
         </div>
         <p className="scrolldown"><a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a></p>
      </header>
      </React.Fragment>
    );
  }

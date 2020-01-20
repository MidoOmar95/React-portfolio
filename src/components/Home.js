import React from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';
import Footer from './Footer';
import resumeData from './resumeData';
export default function Home() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
}
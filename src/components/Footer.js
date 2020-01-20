import React from "react";
export default function Footer(props) {
  let resumeData = props.resumeData;
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item,i) => {
                return (
                  <li  key={i}>
                    <a href={item.url} rel="noopener noreferrer" target="_blank">
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <p style={{color:"white"}}>© 2020 Mohamed Omar. All rights reserved.</p>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}

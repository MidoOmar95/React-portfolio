import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiScrumalliance,
  SiLinkedin,
} from "react-icons/si";

function Certstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://drive.google.com/file/d/1Q38tphQUpeGw1qdOlgZHPNovGHbVOKk3/view?usp=sharing", "_blank")}>
        <SiScrumalliance />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://drive.google.com/file/d/1cQdJ3zlEdAYEUPKSBHl9Ja6Hd8uXAGf7/view?usp=sharing", "_blank")}>
        <SiLinkedin />
      </Col>
    </Row>
  );
}

export default Certstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiCsharp,
  SiTypescript,
  SiMysql,
  SiKotlin,
} from "react-icons/si";
import { TbBrandGolang, TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.python.org/", "_blank")}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.java.com/en/", "_blank")}>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.javascript.com/", "_blank")}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.typescriptlang.org/", "_blank")}>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Glossary/HTML5", "_blank")}>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.w3schools.com/css/", "_blank")}>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.w3schools.com/cpp/", "_blank")}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.w3schools.com/cs/index.php", "_blank")}>
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.w3schools.com/sql/", "_blank")}>
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://kotlinlang.org/", "_blank")}>
        <SiKotlin />
      </Col>
    </Row>
  );
}

export default Techstack;

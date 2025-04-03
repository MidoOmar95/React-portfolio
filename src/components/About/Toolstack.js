import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAndroidstudio,
  SiNodedotjs,
  SiIntellijidea,
  SiEclipseide,
  SiAmazonaws,
  SiReact,
  SiMicrosoftazure,
  SiPostgresql,
  SiBootstrap,
  SiJquery,
  SiExpress,
  SiCucumber,
  SiSelenium,
  SiSonarqube,
  SiAngular,
  SiJupyter,
  SiJunit5,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGit,
  SiAtlassian,
  SiFigma,
  SiGithub,
  SiMicrosoftteams,
  SiMongodb,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://code.visualstudio.com/", "_blank")}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://spring.io/projects/spring-boot", "_blank")}>
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://react.dev/", "_blank")}>
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://angular.dev/", "_blank")}>
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://developer.android.com/studio", "_blank")}>
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://aws.amazon.com/", "_blank")}>
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://nodejs.org/en", "_blank")}>
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://expressjs.com/", "_blank")}>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.jetbrains.com/idea/", "_blank")}>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://eclipseide.org/", "_blank")}>
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.postman.com/", "_blank")}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://azure.microsoft.com/en-us/", "_blank")}>
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.postgresql.org/", "_blank")}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.mongodb.com/", "_blank")}>
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://getbootstrap.com/", "_blank")}>
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://jquery.com/", "_blank")}>
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://cucumber.io/", "_blank")}>
        <SiCucumber />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.selenium.dev/", "_blank")}>
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.sonarsource.com/products/sonarqube/", "_blank")}>
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://jupyter.org/", "_blank")}>
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://junit.org/junit5/", "_blank")}>
        <SiJunit5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.docker.com/", "_blank")}>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://kubernetes.io/", "_blank")}>
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://kafka.apache.org/", "_blank")}>
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://git-scm.com/", "_blank")}>
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://github.com/", "_blank")}>
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.atlassian.com/", "_blank")}>
        <SiAtlassian />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://slack.com/", "_blank")}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.microsoft.com/en-us/microsoft-teams/group-chat-software", "_blank")}>
        <SiMicrosoftteams />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={()=> window.open("https://www.figma.com/", "_blank")}>
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;

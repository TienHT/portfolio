import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
// import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple uppercase">{t("about_me")}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        <Trans
            i18nKey="professional_html"
            values={{ skillset: t("skillset") }}
            components={{ strong: <strong className="purple" /> }}
          >
          </Trans>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <Trans
            i18nKey="tool_usage_html"
            values={{ tool: t("tool") }}
            components={{ strong: <strong className="purple" /> }}
          >
          </Trans>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;

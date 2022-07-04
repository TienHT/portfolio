import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{ fontSize: "2.6em" }}
              className="uppercase whitespace-pre-wrap"
            >
              {t("introduce.title")}
              {/* LET ME <span className="purple"> INTRODUCE </span> MYSELF */}
            </h1>
            <p className="home-about-body">
              {t("introduce.description_1")}
              <br />
              <br />
              {t("introduce.description_2")}
              <i>
                <b className="purple">{t("introduce.language_fe")} </b>
              </i>
              <br />
              <br />
              {t("introduce.description_3")}{" "}
              <b className="purple">{t("introduce.language_be")}</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("contact.title_1")}</h1>
            <p>
              {t("contact.title_2")}{" "}
              <span className="purple">{t("contact.title_3")} </span>
              {t("contact.title_4")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TienHT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="absolute left-1/2 -translate-x-2/4 translate-y-2/4" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/tran.minh.790693/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook className="absolute left-1/2 -translate-x-2/4 translate-y-2/4" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import { Col, Container, Row } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import { RESPONSIBILITY, TECHNOLOGY } from "../../constants";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import { SiHomeadvisor } from "react-icons/si";
import foxcale from "../../Assets/Projects/foxcale.png";
import manageChat from "../../Assets/Projects/manage-chat.png";
import awooAdmin from "../../Assets/Projects/awoo-admin.png";

function Projects() {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      title: t('foxcale_title'),
      description: t('foxcale_des'),
      imgPath: foxcale,
      technology: [TECHNOLOGY.VUEJS, TECHNOLOGY.NUXT, TECHNOLOGY.D3, TECHNOLOGY.BOOTSTRAP],
      responsibity: [RESPONSIBILITY.FRONTEND],
      link: [
        {
          title: t("navbar.home"),
          icon: <SiHomeadvisor />,
          url: "https://www.foxcale.com/foxcope-inspector",
        },
      ],
    },
    {
      title: t('chat_management_title'),
      description: t('chat_management_des'),
      imgPath: manageChat,
      technology: [
        TECHNOLOGY.VUEJS,
        TECHNOLOGY.NUXT,
        TECHNOLOGY.FIREBASE,
        TECHNOLOGY.PYTHON,
        TECHNOLOGY.FLASK,
        TECHNOLOGY.BUEFY
      ],
      responsibity: [RESPONSIBILITY.FRONTEND, RESPONSIBILITY.BACKEND],
      link: [
        {
          title: t("navbar.home"),
          icon: <SiHomeadvisor />,
          url: "https://stg-admin.bizdigi.app/login",
        },
      ],
    },
    {
      title: t('awoo_title'),
      description: t('awoo_des'),
      imgPath: awooAdmin,
      technology: [TECHNOLOGY.REACT, TECHNOLOGY.NEXT, TECHNOLOGY.CHAKRA],
      responsibity: [RESPONSIBILITY.FRONTEND],
      link: [
        {
          title: t("navbar.home"),
          icon: <SiHomeadvisor />,
          url: "https://howlcompanion.com/",
        },
      ],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans
            i18nKey="project_title_html"
            components={{ strong: <strong className="purple" /> }}
          />
        </h1>
        <p style={{ color: "white" }}>{t("project_subtitle")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((item, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description}
                link={item.link}
                technology={item.technology}
                responsibity={item.responsibity}
              ></ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

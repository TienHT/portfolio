import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { LANGUAGE_SELECTED } from "../constants";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (locate) => {
    i18n.changeLanguage(locate);
  };
  const location = useLocation();

  const navbarLink = [
    {
      pathName: "/",
      icon: <AiOutlineHome className="inline-block align-text-top" />,
      label: t("navbar.home"),
    },
    {
      pathName: "/about",
      icon: <AiOutlineUser className="inline-block align-text-top" />,
      label: t("navbar.about"),
    },
    {
      pathName: "/project",
      icon: (
        <AiOutlineFundProjectionScreen className="inline-block align-text-top" />
      ),
      label: t("navbar.project"),
    },
    {
      pathName: "/resume",
      icon: <CgFileDocument className="inline-block align-text-top" />,
      label: t("navbar.resume"),
    },
  ];

  return (
    <Navbar
      expanded={expand}
      expand="md"
      className="sticky top-0 w-full py-3 z-50"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h3 className="text-purple-500 font-bold text-2xl">Tt.</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey={location.pathname || "/"}>
            {navbarLink.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  href={item.pathName}
                  to={item.pathName}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Form.Select
              className="mx-auto w-36"
              aria-label="Default select example"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {Object.keys(LANGUAGE_SELECTED).map((key, index) => (
                <option key={index} value={LANGUAGE_SELECTED[key].name}>
                  {LANGUAGE_SELECTED[key].label}
                </option>
              ))}
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

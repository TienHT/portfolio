import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="whitespace-pre-line text-justify">
            <Trans
              i18nKey="description_about_me_1_html"
              values={{
                name: t("fullname"),
                country: t("country"),
              }}
              components={{ strong: <strong className="purple" /> }}
            ></Trans>
            <br />
            <Trans
              i18nKey="description_about_me_2_html"
              components={{ strong: <strong className="purple" /> }}
            ></Trans>
            <br />
            <br />
          </p>
          <p className="whitespace-pre-line text-justify">
            {t("description_about_me_3")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('play_game')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('singing')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('learn_about_history')}
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            {`" ${t("quote_about_me")} "`}
          </p>
          <br />

          <footer className="blockquote-footer">{t("quote_author_about_me")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function ProjectCards(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="h-72 object-cover"/>
      <Card.Body className="flex flex-col gap-4">
        <div className="flex-grow">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-left">
            {t("technologies")} :{" "}
            {props?.technology.map((item, index) => (
              <Badge key={index} bg="info" className="mr-2">
                {item}
              </Badge>
            ))}
          </Card.Text>
          <Card.Text className="text-left">
            {t("responsibility")} :{" "}
            {props?.responsibity.map((item, index) => (
              <Badge key={index} bg="info" className="mr-2">
                {item}
              </Badge>
            ))}
          </Card.Text>
          <br />
          <Card.Text style={{ textAlign: "justify" }} className="line-clamp-6">
            {props.description}
          </Card.Text>
        </div>
        <div className="flex justify-center gap-4">
          
          {props.link?.map((item, index) => (
            <Button
              key={index}
              variant="primary"
              href={item.url}
              target="_blank"
            >
              {item.icon} &nbsp;
              {item.title}
            </Button>
          ))}

          {props.chilren}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

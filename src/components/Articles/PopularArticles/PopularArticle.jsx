import React from "react";
import { Card } from "react-bootstrap";

const PopularArticle = ({ responsePopular }) => {
  return responsePopular.map((popularData, index) => {
    return (
      <Card key={index} className="my-2 p-0 " style={{ width: "24rem" }}>
        <Card.Link
          href={popularData.url}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <Card.Img
            variant="top"
            src={
              popularData.media[0]?.["media-metadata"]?.[2].url ||
              "/nytDefaultImg.jpg"
            }
          />
        </Card.Link>
        <Card.Body style={{ color: "black" }}>
          <Card.Link
            href={popularData.url}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            <Card.Title>{popularData.title}</Card.Title>
            <Card.Text>{popularData.abstract}</Card.Text>
          </Card.Link>
        </Card.Body>
        <Card.Footer className="d-flex flex-column ">
          <small className="text-muted">{popularData.byline}</small>
          <small className="text-muted">{popularData.published_date}</small>
        </Card.Footer>
      </Card>
    );
  });
};

export default PopularArticle;

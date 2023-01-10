import React from "react";
import { Card } from "react-bootstrap";

const PopularArticle = ({ responsePopular }) => {
  return responsePopular.map((popularData, index) => {
    return (
      // <Col lg={4} className="mt-3 d-flex justify-content-around" key={index}>
      <Card className="my-2 p-0 " style={{ width: "24rem" }}>
        <Card.Link href={popularData.url} style={{ textDecoration: "none" }}>
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
      // </Col>
    );
  });
};

export default PopularArticle;

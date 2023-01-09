import React from "react";
import "./TwoColumnArticle.css";
import { Col, Figure } from "react-bootstrap";

const TwoColumnArticle1 = ({ popularStories }) => {
  return popularStories.map((popularStory, index) => {
    return (
      <Col lg={5} className="m-2 square border-bottom" key={index}>
        <Figure>
          <Figure.Image
            src={
              popularStory.media[0]?.["media-metadata"]?.[1].url ||
              "/nyt-sample-img.webp"
            }
            alt={index}
            fluid
          />
          <Figure.Caption className="text-start fw-bold">
            {popularStory.title}
          </Figure.Caption>
        </Figure>
      </Col>
    );
  });
};

export default TwoColumnArticle1;

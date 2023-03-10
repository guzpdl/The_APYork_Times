import React from "react";
import "./TwoColumnArticle.css";
import { Col, Figure } from "react-bootstrap";

const TwoColumnArticle = ({ popularStories }) => {
  return popularStories.map((popularStory, index) => {
    return (
      <Col lg={5} className="m-2 square border-bottom" key={index}>
        <Figure>
          <a href={popularStory.url} target="_blank" rel="noreferrer">
            <Figure.Image
              src={
                popularStory.media[0]?.["media-metadata"]?.[1].url ||
                "/nyt-sample-img.webp"
              }
              alt={index}
              fluid
            />
          </a>
          <a
            href={popularStory.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Figure.Caption className="fw-bold">
              {popularStory.title}
            </Figure.Caption>
          </a>
        </Figure>
      </Col>
    );
  });
};

export default TwoColumnArticle;

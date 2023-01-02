import React from "react";
import { Figure } from "react-bootstrap";

const TwoColumnArticle2 = ({ popularStories }) => {
  const half = Math.ceil(popularStories.length / 2);

  let secondHalfPopStories = popularStories.slice(half);

  return secondHalfPopStories.map((popularStory, index) => {
    return (
      <div className="m-3 square border-bottom" key={index}>
        <Figure>
          <Figure.Image
            src={
              popularStory.media[0]?.["media-metadata"]?.[1].url ||
              "/1zqk32z6zamtfubdkn39h7384chx.jpg"
            }
            alt={index}
            fluid
          />
          <Figure.Caption className="text-start fw-bold">
            {popularStory.title}
          </Figure.Caption>
        </Figure>
      </div>
    );
  });
};

export default TwoColumnArticle2;

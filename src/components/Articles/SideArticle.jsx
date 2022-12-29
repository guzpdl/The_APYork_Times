import React, { useEffect, useState } from "react";
import MostPopularAxios from "../../services/mostPopular.service";
import { Container } from "react-bootstrap";

const SideArticle = () => {
  const mostPopularAxios = new MostPopularAxios();

  const [popularStories, setPopularStories] = useState([]);

  const printPopularStories = () => {
    mostPopularAxios
      .popularViewedStories(7)
      .then((popular7dStories) => {
        setPopularStories(popular7dStories.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printPopularStories();
  }, []);

  console.log(popularStories);

  return popularStories.map((popularStory, index) => {
    return (
      <Container>
        {/* <img src={popularStory.media[0]["media-metadata"][0].url} alt={index} /> */}
        <h3>{popularStory.title}</h3>
        <p>{popularStory.abstract}</p>
      </Container>
    );
  });
};

export default SideArticle;

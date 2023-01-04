import React, { useEffect, useState } from "react";
import MostPopularAxios from "../../../services/mostPopular.service";
import { Container, Row } from "react-bootstrap";
import TwoColumnArticle1 from "./TwoColumnArticle";

// Popular Articles from TNYT

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

  return (
    <Container className="m-1 square border-start">
      <Row className="square border-start">
        <TwoColumnArticle1 popularStories={popularStories} />
      </Row>
    </Container>
  );
};

export default SideArticle;

import React, { useEffect, useState } from "react";
import MostPopularAxios from "../../../services/mostPopular.service";
import { Col, Container, Figure, Row } from "react-bootstrap";
import TwoColumnArticle1 from "./TwoColumnArticle1";
import TwoColumnArticle2 from "./TwoColumnArticle2";

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
    <Container className="m-3 square border-start">
      <Row className="square border-start">
        <Col>
          <TwoColumnArticle1 popularStories={popularStories} />
        </Col>
        <Col>
          <TwoColumnArticle2 popularStories={popularStories} />
        </Col>
      </Row>
    </Container>
  );
};

export default SideArticle;

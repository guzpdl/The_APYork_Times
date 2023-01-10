import React from "react";
import { Container, Row } from "react-bootstrap";
import NewsArticle from "../components/Articles/NewsArticles/NewsArticle";

const News = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-around">
        <NewsArticle />
      </Row>
    </Container>
  );
};

export default News;

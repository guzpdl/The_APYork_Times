import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsArticle from "../components/Articles/NewsArticles/NewsArticle";

const News = () => {
  return (
    <Container>
      <Row>
        <NewsArticle />
      </Row>
    </Container>
  );
};

export default News;

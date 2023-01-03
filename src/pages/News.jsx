import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsArticle from "../components/Articles/NewsArticles/NewsArticle";

const News = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NewsArticle />
        </Col>
      </Row>
    </Container>
  );
};

export default News;

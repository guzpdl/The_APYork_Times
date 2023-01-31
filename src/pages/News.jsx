import React from "react";
import { Container, Row } from "react-bootstrap";
import NewsArticle from "../components/Articles/NewsArticles/NewsArticle";

const News = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-around">
        <h5
          className="p-4 ps-1 pb-0 square border-bottom"
          style={{ width: "84vw" }}
        >
          Today's news
        </h5>
        <NewsArticle />
      </Row>
    </Container>
  );
};

export default News;

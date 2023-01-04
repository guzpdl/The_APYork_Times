import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Article from "../components/Articles/HomeArticles/Article";
import SideArticle from "../components/Articles/HomeArticles/SideArticle";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Article />
        </Col>
        <Col>
          <SideArticle lg={4} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

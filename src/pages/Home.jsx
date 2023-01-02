import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Article from "../components/Articles/Article";
import SideArticle from "../components/Articles/SideArticle";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Article />
        </Col>
        <Col>
          <SideArticle />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

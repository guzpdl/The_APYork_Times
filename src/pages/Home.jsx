import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Article from "../components/Articles/Article";
import SideArticle from "../components/Articles/SideArticle";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
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

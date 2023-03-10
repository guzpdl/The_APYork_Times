import React from "react";
import "./Masthead.css";
import getCurrentDate from "../utils/date.js";
import { Col, Container, Row } from "react-bootstrap";

const Masthead = () => {
  return (
    <Container className="square border-bottom mt-4">
      <Row className="d-flex align-items-center">
        <Col>
          <p className="text-start ms-4">{getCurrentDate()}</p>
        </Col>
        <Col>
          <h1 className="headerTitle text-center">The APYork Times</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Masthead;

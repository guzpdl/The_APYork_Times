import React from "react";
import { Container, Row } from "react-bootstrap";
import Movie from "../components/Movies/Movie";

const Movies = () => {
  return (
    <Container>
      <Row>
        <Movie />
      </Row>
    </Container>
  );
};

export default Movies;

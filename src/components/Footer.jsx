import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="square border-top mt-2">
      <Row>
        <p className="mt-3">
          &copy; {new Date().getFullYear()} Developed by Guzmán Ponce de León
          using the The New York Times Company API{" "}
        </p>
      </Row>
    </Container>
  );
};

export default Footer;

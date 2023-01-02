import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container>
      <Navbar>
        <Nav className="m-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;

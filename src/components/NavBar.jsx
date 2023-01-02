import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container>
      <Navbar>
        <Nav className="m-auto">
          <Nav.Link className="links" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="links" href="#features">
            Features
          </Nav.Link>
          <Nav.Link className="links" href="#pricing">
            Pricing
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;

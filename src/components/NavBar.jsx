import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container>
      <Navbar>
        <Nav className="m-auto">
          <Nav.Link className="links px-3" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="links px-3" href="/news">
            News
          </Nav.Link>
          <Nav.Link className="links px-3" href="/popular">
            Popular Stories
          </Nav.Link>
          <Nav.Link className="links px-3" href="/books">
            Books
          </Nav.Link>
          <Nav.Link className="links px-3" href="/movies">
            Movies
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;

import React from "react";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation().pathname;

  return (
    <Container>
      <Navbar>
        <Nav className="m-auto">
          <Nav.Link
            className="links px-3"
            as={Link}
            to="/"
            style={{
              fontWeight: location === "/" && "bold",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="links px-3"
            as={Link}
            to="/news"
            style={{
              fontWeight: location === "/news" && "bold",
            }}
          >
            News
          </Nav.Link>
          <Nav.Link
            className="links px-3"
            as={Link}
            to="/popular"
            style={{
              fontWeight: location === "/popular" && "bold",
            }}
          >
            Popular Stories
          </Nav.Link>
          <Nav.Link
            className="links px-3"
            as={Link}
            to="/books"
            style={{
              fontWeight: location === "/books" && "bold",
            }}
          >
            Books
          </Nav.Link>
          <Nav.Link
            className="links px-3"
            as={Link}
            to="/movies"
            style={{
              fontWeight: location === "/movies" && "bold",
            }}
          >
            Movies
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;

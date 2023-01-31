import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Book from "../components/Books/Book";
import BooksAxios from "../services/books.service";

const Books = () => {
  const boosAxios = new BooksAxios();

  const [fictionBooks, setFictionBooks] = useState([]);

  const getFictionBooks = () => {
    boosAxios
      .booksByGenre("hardcover-fiction")
      .then((fictionBooksData) => {
        setFictionBooks(fictionBooksData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFictionBooks();
  }, []);

  return (
    <Container>
      <Row>
        <h5>Best sellers</h5>
        <Book bookData={fictionBooks} />
      </Row>
    </Container>
  );
};

export default Books;

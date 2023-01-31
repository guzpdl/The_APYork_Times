import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Book = ({ bookData }) => {
  console.log(bookData);
  let first5 = bookData?.books?.slice(0, 5);

  return (
    <>
      <h6>{bookData?.list_name}</h6>
      {first5?.map((bookInfo, index) => {
        return (
          <Col key={index} className="square border-end border-start">
            <div
              style={{ width: "14rem", height: "28rem" }}
              className="m-1 d-flex flex-column justify-content-between"
            >
              <Container className="p-0 ">
                <Row className="d-flex justify-content-between">
                  <Col>
                    <p className="me-auto">{bookInfo.rank}</p>
                  </Col>
                  <Col>
                    <Image
                      src={bookInfo.book_image}
                      className="d-block"
                      style={{
                        maxWidth: "8rem",
                      }}
                      fluid
                    />
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
              <div
                className="d-flex flex-column justify-content-between "
                style={{ width: "14rem", height: "13rem" }}
              >
                <h6 className="fw-bold">{bookInfo.title}</h6>
                <p className="fst-italic">{bookInfo.contributor}</p>
                <p>{bookInfo.description}</p>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt={index}
                  className="btn btn-dark "
                  href={bookInfo.amazon_product_url}
                >
                  BUY
                </a>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Book;

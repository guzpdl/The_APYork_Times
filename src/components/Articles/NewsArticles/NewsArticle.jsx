import React, { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import TopStoriesAxios from "../../../services/topStories.service";

const NewsArticle = () => {
  const newStoriesAxios = new TopStoriesAxios();

  const [newStories, setNewStories] = useState([]);

  const printNewsStories = () => {
    newStoriesAxios
      .homeStories()
      .then((newStoriesData) => {
        setNewStories(newStoriesData.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printNewsStories();
  }, []);

  return newStories.map((newsData, index) => {
    return (
      <Col lg={4} className="mt-3 d-flex justify-content-around" key={index}>
        <Card className="m-2 text-start" style={{ width: "28rem" }}>
          <Card.Link href={newsData.url} style={{ textDecoration: "none" }}>
            <Card.Img variant="top" src={newsData.multimedia[1].url} />
            <Card.Body style={{ color: "black" }}>
              <Card.Title>{newsData.title}</Card.Title>
              <Card.Text>{newsData.abstract}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-start flex-column">
              <small className="text-muted">{newsData.byline}</small>
              <small className="text-muted">{newsData.published_date}</small>
            </Card.Footer>
          </Card.Link>
        </Card>
      </Col>
    );
  });
};

export default NewsArticle;

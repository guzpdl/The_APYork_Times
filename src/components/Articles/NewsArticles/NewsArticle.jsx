import React, { useEffect, useState } from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
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

  console.log(newStories);

  return newStories.map((newsData, index) => {
    return (
      <Col lg={4} className="d-flex justify-content-around">
        <Card className="m-2" style={{ width: "28rem" }}>
          <Card.Img variant="top" src={newsData.multimedia[1].url} />
          <Card.Body>
            <Card.Title>{newsData.title}</Card.Title>
            <Card.Text>{newsData.abstract}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default NewsArticle;

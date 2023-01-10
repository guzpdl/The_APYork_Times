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
      // <Col lg={4} className="mt-3 d-flex justify-content-around" key={index}>
      <Card className="my-2 p-0 " style={{ width: "24rem" }} key={index}>
        <Card.Link href={newsData.url} style={{ textDecoration: "none" }}>
          <Card.Img
            variant="top"
            src={newsData.multimedia?.[1].url || "/nytDefaultImg.jpg"}
            fluid
          />
          <Card.Body style={{ color: "black" }}>
            <Card.Title>{newsData.title}</Card.Title>
            <Card.Text>{newsData.abstract}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex flex-column ">
            <small className="text-muted">{newsData.byline}</small>
            <small className="text-muted">{newsData.published_date}</small>
          </Card.Footer>
        </Card.Link>
      </Card>
      // </Col>
    );
  });
};

export default NewsArticle;

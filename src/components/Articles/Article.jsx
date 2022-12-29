import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopStoriesAxios from "../../services/topStories.service";

const Article = () => {
  const topStoriesAxios = new TopStoriesAxios();

  const [topStories, setTopStories] = useState([]);

  const printTopStories = () => {
    topStoriesAxios
      .homeStories()
      .then((topStoriesData) => {
        setTopStories(topStoriesData.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printTopStories();
  }, []);

  return topStories.map((dataStory, indx) => {
    return (
      <Container className="m-3 " key={indx}>
        <Row>
          <Col className="square border-dark border-bottom">
            <h3>{dataStory.title}</h3>
            <p>{dataStory.abstract}</p>
          </Col>
          <Col className="square border-dark border-bottom">
            <img
              className="mb-3"
              src={dataStory.multimedia[1].url}
              alt={indx}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  });
};

export default Article;

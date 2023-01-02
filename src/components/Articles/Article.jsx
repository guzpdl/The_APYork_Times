import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TopStoriesAxios from "../../services/topStories.service";

const Article = () => {
  const topStoriesAxios = new TopStoriesAxios();

  const [topStories, setTopStories] = useState([]);

  const printTopStories = () => {
    topStoriesAxios
      .homeStories()
      .then((topStoriesData) => {
        setTopStories(topStoriesData.results.slice(0, 7));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printTopStories();
  }, []);

  return topStories.map((dataStory, indx) => {
    return (
      <Container className="m-3 square border-dark border-bottom" key={indx}>
        <Row>
          <Col className="text-start">
            <h3>{dataStory.title}</h3>
            <p>{dataStory.abstract}</p>
          </Col>
          <Col>
            <Image
              className="mb-3"
              src={dataStory.multimedia[1].url}
              alt={indx}
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
  });
};

export default Article;

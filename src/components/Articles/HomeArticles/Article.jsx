import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TopStoriesAxios from "../../../services/topStories.service";

// Front News from TNYT

const Article = () => {
  const topStoriesAxios = new TopStoriesAxios();

  const [topStories, setTopStories] = useState([]);

  const printTopStories = () => {
    topStoriesAxios
      .homeStories()
      .then((topStoriesData) => {
        setTopStories(topStoriesData.results.slice(0, 8));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printTopStories();
  }, []);

  return topStories.map((dataStory, indx) => {
    return (
      <Container className="m-3 square border-dark border-bottom " key={indx}>
        <Row>
          <Col>
            <a
              target="_blank"
              href={dataStory.url}
              style={{ textDecoration: "none", color: "black" }}
              rel="noreferrer"
            >
              <h3>{dataStory.title}</h3>
              <p>{dataStory.abstract}</p>
            </a>
          </Col>
          <Col>
            <a href={dataStory.url} target="_blank" rel="noreferrer">
              <Image
                className="mb-3"
                src={dataStory?.multimedia?.[1].url || "/nytDefaultImg.jpg"}
                alt={indx}
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  });
};

export default Article;

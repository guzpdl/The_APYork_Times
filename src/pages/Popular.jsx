import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PopularArticle from "../components/Articles/PopularArticles/PopularArticle";
import PopularArticlesFilter from "../components/Articles/PopularArticles/PopularArticlesFilter";
import MostPopularAxios from "../services/mostPopular.service";

const Popular = () => {
  const popularStoriesAxios = new MostPopularAxios();

  const [filterDate, setFilterDate] = useState(1);
  const [filterPopularity, setFilterPopularity] = useState("emailed");
  const [responsePopular, setResponsePopular] = useState([]);

  const defaultPrintPopular = () => {
    popularStoriesAxios
      .popularEmailedStories(filterDate)
      .then((popularStoriesEmailed) => {
        setResponsePopular(popularStoriesEmailed.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    defaultPrintPopular();
  }, []);

  return (
    <Container>
      <Row>
        <PopularArticlesFilter
          filterDate={filterDate}
          filterPopularity={filterPopularity}
          setFilterPopularity={setFilterPopularity}
          setFilterDate={setFilterDate}
          setResponsePopular={setResponsePopular}
          popularStoriesAxios={popularStoriesAxios}
        />
      </Row>
      <Row className="d-flex justify-content-around">
        <PopularArticle
          filterDate={filterDate}
          filterPopularity={filterPopularity}
          responsePopular={responsePopular}
        />
      </Row>
    </Container>
  );
};

export default Popular;

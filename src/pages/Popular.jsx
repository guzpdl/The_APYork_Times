import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PopularArticle from "../components/Articles/PopularArticles/PopularArticle";
import PopularArticlesFilter from "../components/Articles/PopularArticles/PopularArticlesFilter";

const Popular = () => {
  const [filterDate, setFilterDate] = useState("");
  const [filterPopularity, setfilterPopularity] = useState("");

  return (
    <Container>
      <PopularArticlesFilter
        filterDate={filterDate}
        filterPopularity={filterPopularity}
        setfilterPopularity={setfilterPopularity}
        setFilterDate={setFilterDate}
      />
      <PopularArticle
        filterDate={filterDate}
        filterPopularity={filterPopularity}
      />
    </Container>
  );
};

export default Popular;

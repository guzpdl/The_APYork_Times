import React from "react";
import { Form, Button } from "react-bootstrap";

const PopularArticlesFilter = ({
  setFilterDate,
  setFilterPopularity,
  filterDate,
  filterPopularity,
  setResponsePopular,
  popularStoriesAxios,
}) => {
  const submitSearch = (event) => {
    event.preventDefault();
    if (filterPopularity === "emailed") {
      popularStoriesAxios
        .popularEmailedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    }
    if (filterPopularity === "shared") {
      popularStoriesAxios
        .popularSharedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    } else {
      popularStoriesAxios
        .popularViewedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    }
  };

  return (
    <>
      <Form
        onSubmit={submitSearch}
        className="d-flex flex-row justify-content-end"
      >
        <Form.Group className="m-2">
          <Form.Label>Show the most...</Form.Label>
          <Form.Select
            as="select"
            onChange={(e) => setFilterPopularity(e.target.value)}
          >
            <option defaultValue={"emailed"} value={"emailed"}>
              emailed articles
            </option>
            <option value={"shared"}>shared articles</option>
            <option value={"viewed"}>viewed articles</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Label>By period of time (days)</Form.Label>
          <Form.Select
            as="select"
            onChange={(e) => setFilterDate(e.target.value)}
          >
            <option defaultValue={1} value={1}>
              1
            </option>
            <option value={7}>7</option>
            <option value={30}>30</option>
          </Form.Select>
        </Form.Group>
        <Button variant="light" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default PopularArticlesFilter;

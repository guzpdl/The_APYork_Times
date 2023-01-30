import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PopularArticlesFilter = ({
  setFilterDate,
  setFilterPopularity,
  filterDate,
  filterPopularity,
  setResponsePopular,
  popularStoriesAxios,
}) => {
  const [titleChanges, setTitleChanges] = useState("emailed");
  const [daysChanges, setDaysChanges] = useState(1);

  const submitSearch = (event) => {
    setDaysChanges(+filterDate);

    event.preventDefault();
    if (filterPopularity === "emailed") {
      setTitleChanges("emailed");

      popularStoriesAxios
        .popularEmailedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    } else if (filterPopularity === "shared") {
      setTitleChanges("shared");

      popularStoriesAxios
        .popularSharedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    } else if (filterPopularity === "viewed") {
      setTitleChanges("viewed");

      popularStoriesAxios
        .popularViewedStories(filterDate)
        .then((searchedData) => {
          setResponsePopular(searchedData.results);
        });
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center px-4">
      <h5>
        Showing the most {titleChanges} stories in the last{" "}
        {daysChanges === 1 ? "day" : daysChanges === 7 ? "7 days" : "30 days"}
      </h5>
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
            <option value={"emailed"}>emailed articles</option>
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
            <option value={1}>1</option>
            <option value={7}>7</option>
            <option value={30}>30</option>
          </Form.Select>
        </Form.Group>
        <Button variant="light" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default PopularArticlesFilter;

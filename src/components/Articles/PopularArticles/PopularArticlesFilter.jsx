import React from "react";
import { Form, Button } from "react-bootstrap";

const PopularArticlesFilter = ({ setFilterDate, setFilterPopularity }) => {
  const handleSelectedDate = () => {};

  return (
    <>
      <Form
        // onSubmit={}
        className="d-flex flex-row justify-content-end"
      >
        <Form.Group className="m-2">
          <Form.Label>Filter by most...</Form.Label>
          <Form.Select as="select">
            <option value={"emailed"}>emailed articles</option>
            <option value={"shared"}>shared articles</option>
            <option value={"viewed"}>viewed articles</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="m-2">
          <Form.Label>Filter by period of time (days)</Form.Label>
          <Form.Select as="select">
            <option value={1}>1</option>
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

import React, { useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axios } from "../lib";

function JobSearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(true);

  const handleSearch = async () => {
    await axios.get("/positions");
  };

  return (
    <Container>
      <Form className="text-white">
        <Form.Group controlId="search">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="fullTime">
          <Form.Check
            type="checkbox"
            label="Full Time"
            checked={fullTime}
            onChange={(e) => setFullTime(e.target.checked)}
          />
        </Form.Group>
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </Form>
      <Pagination.Item></Pagination.Item>
    </Container>
  );
}

export default JobSearchBar;

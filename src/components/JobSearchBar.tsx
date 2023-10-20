import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Pagination,
  Row,
  Spinner,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axios } from "../lib";
import { setAuthToken } from "../lib/axios";
import { Job, JobShort } from "../types/jobs";
import JobCard from "./JobCard";
import JobPagination from "./JobPagination";
import { start } from "repl";

function JobSearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  let emptyJobList: JobShort[] = [];
  const [jobList, setJobList] = useState(emptyJobList);

  const handleSearch = async (page: number) => {
    setCurrentPage(1);
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("no token");
    }
    await axios
      .get("/positions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          limit: 5,
          search: search,
          location: location,
          full_time: fullTime,
        },
      })
      .then((res) => {
        setJobList(res.data.data);
        setTotalPage(res.data.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangePage = (page: number) => {
    handleSearch(page);
    setCurrentPage(page);
  };

  const showJobList = () => {
    if (isLoading) {
      return (
        <Container className="text-center" style={{ height: "50vh" }}>
          <Spinner variant="light" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      );
    } else if (jobList.length == 0) {
      return (
        <Container className="text-white text-center">
          No jobs found for that query.
        </Container>
      );
    }
    return (
      <Container style={{ height: "50vh" }}>
        {jobList.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            type={job.type}
            url={job.url}
            created_at={job.created_at}
            company={job.company}
            company_url={job.company_url}
            location={job.location}
            title={job.title}
            company_logo={job.company_logo}
          />
        ))}
      </Container>
    );
  };

  useEffect(() => {
    handleSearch(1);
  }, []);

  return (
    <Container>
      <Form className="text-white">
        <Row className="mt-2 mb-3">
          <Col>
            <Form.Group controlId="search">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job description"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="fullTime">
          <Form.Check
            type="checkbox"
            label="Full Time"
            checked={fullTime}
            onChange={(e) => setFullTime(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary mt-3" onClick={() => handleSearch(1)}>
          Search
        </Button>
      </Form>
      <Container className="align-top mt-2">{showJobList()}</Container>
      <Container className="justify-content-center align-items-center text-center d-flex">
        <JobPagination
          current={currentPage}
          total={totalPage}
          onChangePage={handleChangePage}
        />
      </Container>
    </Container>
  );
}

export default JobSearchBar;

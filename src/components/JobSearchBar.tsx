import React, { useEffect, useState } from "react";
import { Button, Container, Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { axios } from "../lib";
import { setAuthToken } from "../lib/axios";
import { Job, JobShort } from "../types/jobs";
import JobCard from "./JobCard";
import JobPagination from "./JobPagination";

function JobSearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  let emptyJobList: JobShort[] = [];
  const [jobList, setJobList] = useState(emptyJobList);

  // Calculate the start and end index for the current page
  const startIndex = currentPage * 5;
  const endIndex = startIndex + 5;

  const currentJobs = jobList.slice(startIndex, endIndex);

  const handleSearch = async () => {
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
          page: currentPage,
          limit: 5,
          search: search,
          location: location,
          full_time: fullTime,
        },
      })
      .then((res) => {
        setJobList(res.data.data);
        setTotalPage(res.data.total);
        console.log("response", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangePage = (page: number) => [setCurrentPage(page)];

  useEffect(() => {
    handleSearch();
  });

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
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      <Container className="align-top">
        {jobList.map((job) => (
          <JobCard
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
      <JobPagination
        current={currentPage}
        total={totalPage}
        onChangePage={handleChangePage}
      />
    </Container>
  );
}

export default JobSearchBar;

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Job } from "../types/jobs";
import { axios } from "../lib";
import HTMLReactParser from "html-react-parser";
import { calculateDays } from "../lib/time";

const JobDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let job: Job = {
    description: "",
    how_to_apply: "",
    id: "",
    type: "",
    url: "",
    created_at: "",
    company: "",
    company_url: "",
    location: "",
    title: "",
    company_logo: "",
  };
  const [jobDetail, setJobDetail] = useState(job);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("no token");
    }
    await axios
      .get(`/positions/${String(id)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data: Job = res.data;
        setJobDetail(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goBack = () => {
    console.log("clicked");
    navigate(-2);
  };

  if (isLoading) {
    return (
      <Container className="text-center mt-4" style={{ height: "50vh" }}>
        <Spinner variant="light" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  } else if (!jobDetail.title) {
    return (
      <Container className="text-white mt-3 text-center">
        An unknown error encountered while fetching data
      </Container>
    );
  }

  return (
    <Container className="text-white pt-2 pb-5">
      <Button onClick={goBack} variant="secondary" className="mt-3 mb-2">
        Go back
      </Button>
      <h1>{jobDetail.title}</h1>
      <Container className="mb-3 px-0 mt-4 mb-2 h4">
        {/* <img src={jobDetail.company_logo} alt="" /> */}
        <a className="text-white" href={jobDetail.company_url} target="_blank">
          <span>{jobDetail.company}</span>
        </a>
        <span> - {jobDetail.location}</span>
        <span> - {calculateDays(jobDetail.created_at)}</span>
      </Container>

      {HTMLReactParser(jobDetail.description)}
      {HTMLReactParser(jobDetail.how_to_apply)}
    </Container>
  );
};

export default JobDetail;

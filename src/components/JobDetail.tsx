import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Job } from "../types/jobs";
import { axios } from "../lib";

const JobDetail = () => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container className="text-white">
      <h1>{jobDetail.title}</h1>
      <h2>{jobDetail.company}</h2>
      <h3>{jobDetail.location}</h3>
      {jobDetail.description}
      <p>{jobDetail.how_to_apply}</p>
    </Container>
  );
};

export default JobDetail;

import { Button, Container } from "react-bootstrap";
import AccountForm from "../components/AccountForm";
import { axios } from "../lib";
import { Navigate, useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import JobSearchBar from "../components/JobSearchBar";

const JobPortal = () => {
  const handleJobPortal = async () => {
    return false;
  };

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <h1 className="text-white text-center">Job Portal</h1>
      <JobSearchBar />
    </Container>
  );
};

export default JobPortal;

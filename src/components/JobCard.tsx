import { Button, Card, Container } from "react-bootstrap";
import { JobShort } from "../types/jobs";
import { Link, useNavigate } from "react-router-dom";
import { calculateDays } from "../lib/time";

const JobCard = (job: JobShort) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    console.log("navigate");
    navigate(`/jobs/${job.id}`);
  };
  return (
    <Card style={{ width: "22rem" }} className="m-3 d-inline-block">
      <Card.Body>
        <Card.Title className="fw-bold">{job.title}</Card.Title>
        <Card.Subtitle>
          {job.company} - {job.location}
        </Card.Subtitle>
        <Card.Text className="text-secondary mt-1">
          {job.type} - {calculateDays(job.created_at)}
        </Card.Text>
        <Link to={`/jobs/${job.id}`}>
          <Button variant="primary" onClick={handleDetailClick}>
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

import { Button, Card, Container } from "react-bootstrap";
import { JobShort } from "../types/jobs";

const JobCard = (job: JobShort) => {
  const handleDetailClick = () => {
    window.location.href = `/jobs/${job.id}`;
  };
  return (
    <Card style={{ width: "22rem" }} className="m-3 d-inline-block">
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle>
          {job.company} - {job.location}
        </Card.Subtitle>
        <Card.Text>
          {job.type} - {job.created_at}
        </Card.Text>
        <Button variant="primary" onClick={handleDetailClick}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

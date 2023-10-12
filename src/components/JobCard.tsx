import { Button, Card, Container } from "react-bootstrap";
import { JobShort } from "../types/jobs";

const JobCard = (job: JobShort) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle>
          {job.company} - {job.location}
        </Card.Subtitle>
        <Card.Text>
          {job.type} - {job.created_at}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

import { Button, Card, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/jobs" />;
  }
  return (
    <Container className="d-flex justify-content-center align-items-center text-center">
      <Card
        style={{ width: "25vw" }}
        className="mt-5 text-white"
        bg="dark"
        border="secondary"
      >
        <Card.Body>
          <Card.Header>
            <h2 className="fw-bold">Super Simple Job Portal</h2>
          </Card.Header>
          <Card.Subtitle className="mt-2 mb-2">
            A simple interface for authenticating a job portal app
          </Card.Subtitle>
          <Container className="d-flex justify-content-center align-items-center">
            <Button href="/login" variant="primary" size="lg" className="m-3">
              Login
            </Button>
            <br />
            <Button href="/register" variant="secondary" size="lg">
              Register
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;

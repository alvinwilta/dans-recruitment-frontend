import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Button href="/login" variant="primary" size="lg" className="mb-2">
          Login
        </Button>
        <br />
        <Button href="/register" variant="secondary" size="lg">
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Home;

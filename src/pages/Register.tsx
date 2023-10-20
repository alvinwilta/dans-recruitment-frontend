import { Button, Card, Container } from "react-bootstrap";
import AccountForm from "../components/AccountForm";
import { axios } from "../lib";

const Register = () => {
  const handleRegister = async (username: string, password: string) => {
    return await axios
      .post("/auth/register", { username, password })
      .then((res) => {
        console.log("registered!");
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
  return (
    <Container className="d-flex justify-content-center align-items-center text-center">
      <Card
        style={{ width: "40vw" }}
        className="mt-5 text-white"
        bg="dark"
        border="secondary"
      >
        <Card.Body>
          <Card.Header>
            <h2 className="fw-bold">Register</h2>
          </Card.Header>
          <Container style={{ marginBottom: "5vh" }}>
            <AccountForm
              onClickButton={handleRegister}
              errorMessage="Something went wrong with the registration"
              buttonText="Register"
              redirectPath="/login"
            />
          </Container>
          <div className="text-center text-white mb-4">
            Already have an account?{" "}
            <a className="text-white" href="/login">
              Login
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;

import { useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import AccountForm from "../components/AccountForm";
import { axios } from "../lib";
import { hasJWT, setAuthToken } from "../lib/axios";

const Login = () => {
  const handleLogin = async (username: string, password: string) => {
    return await axios
      .post("/auth/login", { username, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setAuthToken(token);
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
            <h2 className="fw-bold">Login</h2>
          </Card.Header>
          <Container style={{ marginBottom: "5vh" }}>
            <AccountForm
              onClickButton={handleLogin}
              errorMessage="Invalid username or password!"
              buttonText="Login"
              redirectPath="/jobs"
            />
          </Container>
          <div className="text-center text-white mb-4">
            New here?{" "}
            <a className="text-white" href="/register">
              Create an account
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;

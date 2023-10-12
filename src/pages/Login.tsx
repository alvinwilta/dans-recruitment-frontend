import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
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
        setAuthToken(token);
        console.log(token);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  if (hasJWT()) {
    return (
      <Container className="d-block align-middle">
        <h1 className="text-white">Login</h1>
        <AccountForm onClickButton={handleLogin} buttonText="Login" />
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>You are logged in</h1>
      </Container>
    );
  }
};

export default Login;

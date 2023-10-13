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
    <Container className="d-block align-middle">
      <h1 className="text-white text-center">Login</h1>
      <AccountForm
        onClickButton={handleLogin}
        buttonText="Login"
        redirectPath="/jobs"
      />
    </Container>
  );
};

export default Login;

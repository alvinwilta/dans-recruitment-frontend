import { Button, Container } from "react-bootstrap";
import AccountForm from "../components/AccountForm";
import { axios } from "../lib";

const Register = () => {
  const handleRegister = async (username: string, password: string) => {
    return false;
  };
  return (
    <Container>
      <h1 className="text-white">Register</h1>
      <AccountForm onClickButton={handleRegister} buttonText="Register" />
    </Container>
  );
};

export default Register;

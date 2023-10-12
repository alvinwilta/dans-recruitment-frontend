import { Button, Container } from "react-bootstrap";
import AccountForm from "../components/AccountForm";
import { axios } from "../lib";

const Register = () => {
  const handleRegister = async (username: string, password: string) => {
    return false;
  };
  return (
    <Container>
      <h1 className="text-white text-center">Register</h1>
      <AccountForm
        onClickButton={handleRegister}
        buttonText="Register"
        redirectPath="/login"
      />
    </Container>
  );
};

export default Register;

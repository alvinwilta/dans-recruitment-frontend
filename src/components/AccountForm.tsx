import { useState } from "react";
import { axios } from "../lib";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  buttonText: string;
  redirectPath: string;
  errorMessage: string;
  onClickButton: (username: string, password: string) => Promise<boolean>;
}

const AccountForm = ({
  buttonText,
  redirectPath,
  errorMessage,
  onClickButton,
}: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const disableButton = !(Boolean(username) && Boolean(password));

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showErrorMessage = () => {
    if (isError) {
      return (
        <Container className="text-center mt-4">
          <h6 className="text-danger">{errorMessage}</h6>
        </Container>
      );
    }
    return (
      <Container className="text-center mt-4">
        <h5>&nbsp;</h5>
      </Container>
    );
  };

  const handleButtonClick = async () => {
    const success = await onClickButton(username, password);

    if (success) {
      navigate(redirectPath);
    } else {
      setError(true);
    }
  };

  return (
    <Container className="text-white mt-2 text-start">
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        {showErrorMessage()}
        <Container className="text-center">
          <Button
            className="mt-3"
            size="lg"
            variant="primary"
            onClick={handleButtonClick}
            disabled={disableButton}
          >
            {buttonText}
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AccountForm;

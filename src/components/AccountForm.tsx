import { useState } from "react";
import { axios } from "../lib";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

interface LoginFormProps {
  buttonText: string;
  onClickButton: (username: string, password: string) => Promise<boolean>;
}

const AccountForm = ({ buttonText, onClickButton }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const disableButton = !(Boolean(username) && Boolean(password));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleButtonClick = async () => {
    const success = await onClickButton(username, password);
    if (success) {
      console.log("ok");
      return;
    }
    console.log("n");
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

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

        <Button
          variant="primary"
          onClick={handleButtonClick}
          disabled={disableButton}
        >
          {buttonText}
        </Button>
      </Form>
    </Container>
  );
};

export default AccountForm;

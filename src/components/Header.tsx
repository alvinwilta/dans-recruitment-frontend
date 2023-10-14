import { Navbar, Nav, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const logoutButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <Nav.Link href="/login" className="me-3" onClick={logout}>
          Logout
        </Nav.Link>
      );
    }
  };

  const userInfo = () => {
    if (localStorage.getItem("username")) {
      return (
        <Navbar.Text className="me-3">
          Signed in as: &nbsp;<b>{localStorage.getItem("username")}</b>
        </Navbar.Text>
      );
    }
  };

  return (
    <Navbar
      data-bs-theme="dark"
      bg="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Super Simple Job Portal</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {userInfo()}
            {logoutButton()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      data-bs-theme="dark"
      bg="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Dans Search</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Navbar.Text className="me-3">
              Signed in as: <b>Alvin Wilta</b>
            </Navbar.Text>
            <Nav.Link className="me-3" href="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

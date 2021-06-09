import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        ABC BANK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/lad">
            LAD
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            CONTACT
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            ADMIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

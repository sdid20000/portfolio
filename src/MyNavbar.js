import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/portfolio">Michael Tu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Cart">Cart Site</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Iterative-Design">Iterative Design</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Zumix-Redesign">Zumix-Redesign</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Personas">Personas</Link>
              </NavDropdown.Item>
              <div class="dropdown-divider"></div>
              <NavDropdown.Item>
                <Link to="/Research">ReSearch</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link>
                <Link to="/Music">Music</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/Resume">
                  Resum&eacute;
                  </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNavbar;

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">Michael Tu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="Cart">Cart Site</NavDropdown.Item>
              <NavDropdown.Item href="Iterative-Design">
                Iterative Design
              </NavDropdown.Item>
              <NavDropdown.Item href="Zumix-Redesign">
                Zumix Redesign
              </NavDropdown.Item>
              <NavDropdown.Item href="Personas">Personas</NavDropdown.Item>
              <div class="dropdown-divider"></div>
              <NavDropdown.Item href="ReSearch">ReSearch</NavDropdown.Item>
              <NavDropdown.Item href="Buo">BUO Website</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="Music">Music</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="Resume">Resum&eacute;</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNavbar;

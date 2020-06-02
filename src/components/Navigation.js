import React from 'react'
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
export default function Navigation() {
    return (
        <div>
            <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Ngomax</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

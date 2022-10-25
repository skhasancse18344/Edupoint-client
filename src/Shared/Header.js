import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Edupoint</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Courses</Nav.Link>
              {/* <Link to={"/"}>Courses</Link> */}
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">SignIn</Nav.Link>
              <Nav.Link href="#deets">SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

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
          <Link className="text-white text-decoration-none pt-1 ms-4" to={"/"}>
            Edupoint
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5">
              <Link
                className="text-white text-decoration-none  ms-4 pt-1"
                to={"/"}
              >
                Courses
              </Link>
              <Link
                className="text-white text-decoration-none pt-1 ms-4"
                to={"/blog"}
              >
                Blog
              </Link>
              <Link
                className="text-white text-decoration-none pt-1 ms-4"
                to={"/question"}
              >
                FAQ
              </Link>
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

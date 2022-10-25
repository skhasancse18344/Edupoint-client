import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-4"
      >
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
              <Link
                className="text-white text-decoration-none pt-1 ms-4"
                to={"/SignIn"}
              >
                Sign In
              </Link>
              <Link
                className="text-white text-decoration-none pt-1 ms-4"
                to={"/SignUp"}
              >
                Sign Up
              </Link>
              <p>{user.displayName}</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

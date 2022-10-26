import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import navIcon from "../Shared/download.png";
import { FaBeer } from "react-icons/fa";

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
          <Link
            className="text-white text-decoration-none pt-1 ms-4 fs-5 fw-bolder d-flex"
            to={"/"}
          >
            <img
              className="me-2 rounded-circle"
              style={{ height: "2rem", width: "2rem" }}
              src={navIcon}
              alt=""
            />
            Edupoint
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5">
              <Link
                className="text-white text-decoration-none  ms-4 pt-1 "
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
            <Nav className="d-flex align-item-center">
              {user.photoURL ? (
                <Image
                  className="me-3"
                  style={{ height: "3rem", width: "3rem" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaBeer></FaBeer>
              )}
              <p className="text-white">{user.displayName}</p>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

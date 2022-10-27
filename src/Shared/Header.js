import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import navIcon from "../Shared/download.png";
import { FaUser } from "react-icons/fa";
import DarkModeToggle from "react-dark-mode-toggle";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
              {isDarkMode ? (
                <p className="text-white mt-2">Dark</p>
              ) : (
                <p className="text-white mt-2">Light</p>
              )}
              <DarkModeToggle
                className="mx-3 mt-2"
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={50}
              />
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>
                }
              >
                {user?.photoURL ? (
                  <Image
                    data-tip="hello world"
                    className="me-3"
                    style={{ height: "3rem", width: "3rem" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser className="text-white fs-3"></FaUser>
                )}
              </OverlayTrigger>

              {user?.uid ? (
                <>
                  <p className="text-white mt-2">{user.displayName}</p>
                  <button
                    onClick={handleLogOut}
                    className="rounded ms-4 px-4 bg-info text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

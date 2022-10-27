import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [accepted, setAccepted] = useState(false);

  //   Login with User Id And Password

  const { signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  //   Login with GitHub

  const { gitLogin } = useContext(AuthContext);
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    gitLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
    navigate(from, { replace: true });
  };
  //   Login with Google

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
    navigate(from, { replace: true });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  //   Login Form

  return (
    <div>
      <Form onSubmit={handleSubmit} className="my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={<>Accept Terms & Conditions</>}
          />
        </Form.Group>
        <Form.Group className="text-danger mb-4">{error}</Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <p className="mt-3">
          If You Have No Account Please <Link to={"/SignUp"}>Register</Link>
        </p>
      </Form>
      <div className="text-center my-5">
        <Button variant="outline-primary" onClick={handleGoogleSingIn}>
          <FaGoogle className="me-2"></FaGoogle>
          Sign With Google
        </Button>
        <Button
          onClick={handleGithubLogin}
          className="ms-3"
          variant="outline-primary"
        >
          <FaGithub className="me-2"></FaGithub>
          Sign With GitHub
        </Button>
      </div>
    </div>
  );
};

export default SignIn;

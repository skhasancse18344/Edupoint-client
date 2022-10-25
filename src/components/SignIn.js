import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="mt-3">
          If You Have No Account Please <Link to={"/SignUp"}>Register</Link>
        </p>
      </Form>
      <div className="text-center my-5">
        <Button variant="outline-primary">Sign With Google</Button>
        <Button className="ms-3" variant="outline-primary">
          Sign With GitHub
        </Button>
      </div>
    </div>
  );
};

export default SignIn;

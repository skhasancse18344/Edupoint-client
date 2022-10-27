import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseDetail = () => {
  const details = useLoaderData();
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <img className="img-fluid" src={details.image} alt="" />
          <Card.Title className="mt-5">{details.name}</Card.Title>
          <Card.Text className="w-75 m-auto mt-5 mb-5">
            {details.description}
          </Card.Text>
          <Button className="me-3">
            <Link className="text-decoration-none text-white" to={"/"}>
              Go Back To Home
            </Link>
          </Button>
          <Button>
            <Link
              className="text-decoration-none text-white"
              to={`/checkout/${details.id}`}
            >
              Get Premium Access
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetail;

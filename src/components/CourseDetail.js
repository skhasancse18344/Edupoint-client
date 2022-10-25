import React from "react";
import { useLoaderData } from "react-router-dom";
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetail;

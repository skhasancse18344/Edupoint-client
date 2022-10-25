import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummuryCard = ({ course }) => {
  return (
    <Col lg="6" className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={course.image} />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
            {course.description.length > 150 ? (
              <p>
                {course.description.slice(0, 150) + "...."}
                <Link to={`/details/${course.id}`}>Read More</Link>
              </p>
            ) : (
              <p>{course.description}</p>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseSummuryCard;

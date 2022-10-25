import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseSummuryCard from "./CourseSummuryCard";

const MainCourses = () => {
  const courses = useLoaderData();
  return (
    <Container>
      <Row>
        <Col className=" bg-dark my-1" lg="4">
          {courses.map((course) => (
            <Link
              className="pt-3 text-decoration-none text-white "
              key={course.id}
              to={`/details/${course.id}`}
            >
              <p className="mt-5 bg-white text-black p-3 rounded">
                {course.name}
              </p>
            </Link>
          ))}
        </Col>

        <Col className="ps-3 pb-5" lg="8">
          <Row>
            {courses.map((course) => (
              <CourseSummuryCard
                key={course.id}
                course={course}
              ></CourseSummuryCard>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCourses;

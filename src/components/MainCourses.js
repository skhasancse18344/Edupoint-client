import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseSummuryCard from "./CourseSummuryCard";

const MainCourses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Row>
        <Col className=" bg-dark ms-3 mt-1" lg="3">
          {courses.map((course) => (
            <Link
              className="pt-3 text-decoration-none text-white"
              key={course.id}
              to={`/details/${course.id}`}
            >
              <h4 className="mt-5">{course.name}</h4>
            </Link>
          ))}
        </Col>

        <Col lg="8">
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
    </div>
  );
};

export default MainCourses;

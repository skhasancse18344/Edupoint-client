import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummuryCard from "./CourseSummuryCard";

const MainCourses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Row>
        <Col lg="4">
          {courses.map((course) => (
            <div>
              <h2>{course.name}</h2>
            </div>
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

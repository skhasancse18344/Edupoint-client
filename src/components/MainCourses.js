import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummuryCard from "./CourseSummuryCard";

const MainCourses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Row>
        <Col lg="4">Left Side Courses</Col>

        <Col lg="8">
          {courses.map((course) => (
            <CourseSummuryCard
              key={course.id}
              course={course}
            ></CourseSummuryCard>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default MainCourses;

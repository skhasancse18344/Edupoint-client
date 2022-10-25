import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const details = useLoaderData();
  return (
    <div>
      <h1>{details.name}</h1>
    </div>
  );
};

export default CourseDetail;

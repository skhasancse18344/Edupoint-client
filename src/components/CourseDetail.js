import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pdf from "react-to-pdf";

import { FaRegFilePdf } from "react-icons/fa";
const ref = React.createRef();

const CourseDetail = () => {
  const details = useLoaderData();
  return (
    <div className="my-5">
      <Card className="text-center w-50 mx-auto" ref={ref}>
        <Card.Body>
          <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => (
                <button
                  className="my-5 fs-2 rounded text-info border-info"
                  onClick={toPdf}
                >
                  <FaRegFilePdf></FaRegFilePdf>
                </button>
              )}
            </Pdf>
          </div>
          <img className="img-fluid" src={details.image} alt="" />
          <Card.Title className="mt-5">{details.name}</Card.Title>
          <Card.Text className="w-75 m-auto mt-5 mb-5">
            {details.description}
          </Card.Text>
          <Button className="me-3">
            <Link className="text-decoration-none text-white" to={"/"}>
              Back To Home
            </Link>
          </Button>
          <Button>
            <Link
              className="text-decoration-none text-white"
              to={`/checkout/${details.id}`}
            >
              ENROLL NOW
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetail;

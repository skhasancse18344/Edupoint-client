import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="mb-5 text-center mt-5">
      <h1 className="mb-5">404 Not Found</h1>
      <Link
        to="/"
        className="px-5 py-2 bg-info text-decoration-none text-white"
      >
        Back to homepage
      </Link>
    </section>
  );
};

export default ErrorPage;

import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to="/SignIn" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;

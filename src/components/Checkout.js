import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  return (
    <div>
      <h1>{checkout.name}</h1>
    </div>
  );
};

export default Checkout;

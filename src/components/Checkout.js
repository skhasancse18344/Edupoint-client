import React from "react";
import { useLoaderData } from "react-router-dom";

import { Col, Container, Image, Row } from "react-bootstrap";

const Checkout = () => {
  const checkout = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2"></Col>
          <Col className="border border-warning my-5 mx-2 text-center" lg="4">
            <Image className="img-fluid" src={checkout.image}></Image>
            <h4 className="my-3">{checkout.name}</h4>
            <p>{checkout.description}</p>
            <h3 className="text-info">
              Subscription Limit : {checkout.premiumSubscription}
            </h3>
            <h3 className="text-danger">
              Premium Price : {checkout.premiumPrice}
            </h3>
          </Col>
          <Col className="border border-warning my-5 mx-2 text-center" lg="4">
            <Image className="img-fluid" src={checkout.image}></Image>
            <h4 className="my-3">{checkout.name}</h4>
            <p>{checkout.description}</p>
            <h3 className="text-info">
              Subscription Limit : {checkout.basicSubscription}
            </h3>
            <h3 className="text-danger">Basic Price : {checkout.basicPrice}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

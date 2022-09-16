import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";

function SessionDetails({ name }) {
  return (
    <>
      <Navbar name={name} />

      <Container>
        <Row>
          <Col md={3}>
            <img
              src={"http://localhost:8005/images/1663232055684p5.jpeg"}
              width={100}
              height={100}
            />
          </Col>
          <Col md={6}>
            <h2>React Js </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SessionDetails;

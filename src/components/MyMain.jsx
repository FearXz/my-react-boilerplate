import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function MyMain() {
  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center">
          <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
        </Col>
      </Row>
      <Button className=" btn-blue-500"> BOTTONE KEBAB</Button>
      <Button className=" btn-blue-600"> BOTTONE KEBAB</Button>
      <Button className=" btn-blue-700"> BOTTONE KEBAB</Button>
      <Button className=" btn-blue-800"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-500"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-600"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-700"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-800"> BOTTONE KEBAB</Button>
    </Container>
  );
}

export default MyMain;

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">WHO ARE WE</Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> Our Team</Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            {" "}
            Our long history of unparalleled commitment to partnering with the
            most extensive carriers and our ability to offer the most versatile
            services
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <Image src="images/puyol.jpg " alt="mie" fluid />
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> NWAIWU CHRYSOGONUS</Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> 08136757488</Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> Software Developer</Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            {" "}
            We deliver domestic electronics and appliances and enable our
            clients to checkout their products online.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AboutUs;

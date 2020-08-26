import React from "react";
import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import droneDelivery from "../assets/drone_delivery.svg";

const Styles = styled.div`
  .jumbo {
    background-color: #efecca;
    color: #002f2f;
    height: 800px;
    position: relative;
    z-index: -2;
  }

  h1 {
    font-weight: 700;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <Container className="pt-5">
        <Row>
          <Col sm={8}>
            <h1>We are JAMZ</h1>
            <p>Learn to code from my YouTube videos</p>
          </Col>
          <Col sm={4}>
            <img src={droneDelivery} width="400" />
          </Col>
        </Row>
      </Container>
    </Jumbo>
  </Styles>
);

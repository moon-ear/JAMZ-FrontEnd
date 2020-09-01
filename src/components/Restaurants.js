import React from "react";
import { Container, CardDeck, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import kfc_img from "../assets/img/food/kfc.jpg";
import pizza from "../assets/img/food/pizza.jpg";
import thai from "../assets/img/food/thai.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Styles = styled.div`
  .my-card {
    height: 100%;
  }
`;

class Restaurants extends React.Component {
  render() {
    return (
      <Styles>
        <Container className="section_title my-5">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="200">
            <h3 style={{ marginBottom: "50px" }}>Delivery options in Ottawa</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="300">
            <CardDeck>
              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={kfc_img} />
                  <Card.Body>
                    <Card.Title>KFC (Kanata)</Card.Title>
                    <Card.Text>
                      $4.49 Delivery Fee
                      <br />
                      15 - 25 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Fast Food - Chicken
                  </Card.Footer>
                </a>
              </Card>

              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={pizza} />
                  <Card.Body>
                    <Card.Title>Pizza Hut (Strandherd)</Card.Title>
                    <Card.Text>
                      $1.49 Delivery Fee
                      <br />
                      10 - 20 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Pizza - American - Italian
                  </Card.Footer>
                </a>
              </Card>

              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={thai} />
                  <Card.Body>
                    <Card.Title>Thai Place (Marketplace)</Card.Title>
                    <Card.Text>
                      $0.49 Delivery Fee
                      <br />5 - 15 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Bakery - Donuts - Coffee
                  </Card.Footer>
                </a>
              </Card>
            </CardDeck>
          </ScrollAnimation>
        </Container>
        <br />
        <Container style={{ marginBottom: "7rem" }}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="300">
            <CardDeck>
              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={kfc_img} />
                  <Card.Body>
                    <Card.Title>KFC (Kanata)</Card.Title>
                    <Card.Text>
                      $4.49 Delivery Fee
                      <br />
                      15 - 25 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Fast Food - Chicken
                  </Card.Footer>
                </a>
              </Card>

              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={pizza} />
                  <Card.Body>
                    <Card.Title>Pizza Hut (Strandherd)</Card.Title>
                    <Card.Text>
                      $1.49 Delivery Fee
                      <br />
                      10 - 20 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Pizza - American - Italian
                  </Card.Footer>
                </a>
              </Card>

              <Card className="my-card">
                <a href="/">
                  <Card.Img variant="top" src={thai} />
                  <Card.Body>
                    <Card.Title>Thai Place (Marketplace)</Card.Title>
                    <Card.Text>
                      $0.49 Delivery Fee
                      <br />5 - 15 min
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Bakery - Donuts - Coffee
                  </Card.Footer>
                </a>
              </Card>
            </CardDeck>
          </ScrollAnimation>
        </Container>
      </Styles>
    );
  }
}

export default Restaurants;

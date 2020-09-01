import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Container, CardDeck, Row, Card } from "react-bootstrap";
import { Footer } from "./components/Footer";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import kfc_img from "./assets/img/food/kfc.jpg";
import pizza from "./assets/img/food/pizza.jpg";
import thai from "./assets/img/food/thai.jpg";

export const Customer = () => (
  <React.Fragment>
    <NavigationBar />
    <div className="bradcam_area bradcam_bg_drone">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bradcam_text text-center">
              <h3>Delivery Tracking</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="portfolio_image_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay="200"
                animateOnce={true}
              >
                <h3>Your order</h3>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <ScrollAnimation animateIn="fadeInUp" delay="300" animateOnce={true}>
            <Container className="section_title" style={{ width: "28rem" }}>
              <Card className="p-3">
                <Card.Body>
                  <Card.Title>Small Wings Combo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    From <a href="/">KFC (Kanata)</a>
                  </Card.Subtitle>
                  <Card.Text>
                    <p>10pcs Classic</p>
                    <p>Buffalo Sauce on wings</p>
                    <p>Side of Fries</p>
                    <br />
                    <a href="#" class="genric-btn primary circle">
                      Submit Order
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </ScrollAnimation>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

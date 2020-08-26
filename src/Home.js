import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export const Home = () => (
  <React.Fragment>
    <NavigationBar />
    <div className="slider_area">
      <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-10 col-md-10">
              <div className="slider_text">
                <Animated
                  animationIn="fadeInLeft"
                  animationInDuration="1000"
                  animationInDelay="100"
                >
                  <h3>Your favorite food delivered with drones</h3>
                </Animated>
                <Animated
                  animationIn="fadeInLeft"
                  animationInDuration="1000"
                  animationInDelay="300"
                >
                  <p></p>
                  <a className="boxed-btn3" href="portfolio.html">
                    View restaurants
                  </a>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="how_we_work_area"
      style={{ marginTop: "17em", marginBottom: "8em" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="work_info">
              <div className="section_title">
                <ScrollAnimation animateIn="fadeInLeft" delay="300">
                  <h3>How we work</h3>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" delay="400">
                  <p className="mid_text">
                    “Function information without cross action media value.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay="500">
                  <p>
                    “Function information without cross action media value.
                    Efficiently unleash cross-media tour function information
                    without cross action media value. Quickly maximize timely
                    deliverables for real-time schemas.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

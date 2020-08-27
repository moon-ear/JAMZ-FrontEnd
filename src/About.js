import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => (
  <React.Fragment>
    <NavigationBar />
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center slider_bg_2 overlay">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-12 col-md-12">
              <div className="slider_text">
                <Animated
                  animationIn="fadeInLeft"
                  animationInDuration="1000"
                  animationInDelay="100"
                >
                  <h3>
                    We are a team of engineers that are revolutionizing what it
                    means to deliver goods.
                  </h3>
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

    <div className="our_mission_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mission_text">
              <h4>Our Mission</h4>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mision_info">
              <div className="single_mission">
                <p>
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions. Completely synergize resource sucking
                  relationships via premier niche markets.
                </p>
              </div>
              <div className="single_mission">
                <p>
                  Professionally cultivate one-to-one Dynamically innovate
                  resource-leveling customer service for state of the art
                  customer service. Objectively innovate empowered manufactured
                  products whereas parallel platforms service with robust ideas.
                </p>
              </div>
              <div className="single_mission">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="team_area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-90">
              <h3
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Our Team
              </h3>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                Tour function information without cross action media value
                quickly maximize timely deliverables.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQFU3cKMf3B73A/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=ROGuScInc0Hb_ObrAz-lvdnPI5eJ93oiikj8G60U3R4"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Mohammad Abu-Shaaban</h3>
                <p>Lead Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQE-R2C6rJG12A/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=x2x131o2_RJg9yJDfwfFYdieJrTKsZN-FnF0eVnlCHo"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Amro Elsayed</h3>
                <p>Technical Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQFB70O7NfxOGg/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=0UhScfV3AQDDliyLg0KGua0-ByeRE7ZtwQr81vjnsl0"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Zainab Badawy</h3>
                <p>Developer and Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <div className="team_thumb">
                <img
                  src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-1/p320x320/43655180_2293264630715436_4383012055393763328_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=34RqU0hScK0AX8AiWLy&_nc_ht=scontent.fymy1-1.fna&tp=6&oh=637a15d529e265ea3658b229458ebcb0&oe=5F6C439C"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Jacob Steele</h3>
                <p>Hook Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".8s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQFH25x3tGl4xA/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=3GxiPWnUjr3cM3bpfFg5p87oV7AZGLiLPlAIzGQI-U4"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Logan Rodie</h3>
                <p>Hardware Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQEDQM4eAr5gaw/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=6fq9HHk93t97tFl6nLptCTFv6LOyNKIIE8LqhMLaJQM"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Munir Aljawahari</h3>
                <p>Developer & Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="single_team wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".8s"
            >
              <div className="team_thumb">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQHb9jiZhs1s6A/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=siBIg3MXOBFrTb7kMDKzWQ2SnHyqDxq8wn4BRgv0FEE"
                  alt=""
                />
              </div>
              <div className="team_title text-center">
                <h3>Yeald Kin</h3>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

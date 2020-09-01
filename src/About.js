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
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInLeft"
              delay="200"
            >
              <div className="mission_text">
                <h4>Our Mission</h4>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-8">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="400"
            >
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
                    customer service. Objectively innovate empowered
                    manufactured products whereas parallel platforms service
                    with robust ideas.
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
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>

    <div className="team_area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-90">
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                delay="300"
              >
                <h3>Our Team</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                delay="600"
              >
                <p>
                  Tour function information without cross action media value
                  quickly maximize timely deliverables.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="200"
            >
              <div className="single_team">
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
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="400"
            >
              <div className="single_team">
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
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="600"
            >
              <div className="single_team">
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
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="800"
            >
              <div className="single_team ">
                <div className="team_thumb">
                  <img
                    src="https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-1/p320x320/43655180_2293264630715436_4383012055393763328_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=34RqU0hScK0AX8AiWLy&_nc_ht=scontent.fymy1-1.fna&tp=6&oh=637a15d529e265ea3658b229458ebcb0&oe=5F6C439C"
                    alt=""
                  />
                </div>
                <div className="team_title text-center">
                  <h3>Jacob Steele</h3>
                  <p>Mechanical Engineer</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="200"
            >
              <div className="single_team">
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
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-6">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="400"
            >
              <div className="single_team">
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
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>

    <div className="get_in_tauch_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center mb-90">
              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                delay="300"
              >
                <h3>Get in Touch</h3>
              </ScrollAnimation>

              <ScrollAnimation
                animateOnce={true}
                animateIn="fadeInUp"
                delay="400"
              >
                <p>
                  Tour function information without cross action media value
                  quickly maximize timely deliverables.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="touch_form">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInUp"
                      delay="300"
                    >
                      <div className="single_input">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-md-6">
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInUp"
                      delay="400"
                    >
                      <div className="single_input">
                        <input type="email" placeholder="Email" />
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-md-12">
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInUp"
                      delay="500"
                    >
                      <div className="single_input">
                        <input type="email" placeholder="Subject" />
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-md-12">
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInUp"
                      delay="600"
                    >
                      <div className="single_input">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          placeholder="Message"
                          rows="10"
                        ></textarea>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="col-lg-12">
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn="fadeInUp"
                      delay="700"
                    >
                      <div className="submit_btn">
                        <button className="boxed-btn3" type="submit">
                          Send Message
                        </button>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

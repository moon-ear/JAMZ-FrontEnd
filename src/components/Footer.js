import React from "react";
import styled from "styled-components";
import logo from "../assets/logo_full.svg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Styles = styled.div`
  //   .header-area {
  //     // background-color: black;
  //   }
`;

export const Footer = () => (
  <footer className="footer">
    <div className="footer_top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-3">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              animateOnce={true}
              delay="100"
            >
              <div className="footer_logo">
                <a href="/">
                  <img src={logo} width="150px" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-9">
            <div className="menu_links">
              <ul>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeInDown"
                  delay="200"
                  style={{ display: "inline-block" }}
                >
                  <li>
                    <a href="/about">About</a>
                  </li>
                </ScrollAnimation>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <div class="socail_links">
              <ul>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeInUp"
                  delay="300"
                  style={{ display: "inline-block" }}
                >
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>{" "}
                    </a>
                  </li>
                </ScrollAnimation>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeInUp"
                  delay="400"
                  style={{ display: "inline-block" }}
                >
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>{" "}
                    </a>
                  </li>
                </ScrollAnimation>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="fadeInUp"
                  delay="500"
                  style={{ display: "inline-block" }}
                >
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>{" "}
                    </a>
                  </li>
                </ScrollAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div class="container">
        <div class="footer_border"></div>
        <div class="row">
          <div class="col-xl-12">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInUp"
              delay="1300"
            >
              <p class="copy_right text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo_full.svg";

const Styles = styled.div`
  @media only screen and (max-width: 768px) {
    .navbar {
      background-color: rgba(0, 0, 0, 0.8) !important;
    }
  }

  .navbar {
    transition: 0.3s;
  }

  .nav-text {
    color: white !important;
    font-weight: 700;

    &:hover {
      color: ;
    }
  }
`;

class NavigationBar extends React.Component {
  state = { active: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const { pageYOffset } = window;
    const { active } = this.state;

    if (pageYOffset >= 200 && active === 0) {
      this.setState({ active: 1 });
    } else if (pageYOffset < 200 && active === 1) {
      this.setState({ active: 0 });
    }
  };

  render() {
    const { active } = this.state;
    return (
      <Styles>
        <Navbar
          className="navbar"
          fixed="top"
          expand="md"
          variant="dark"
          style={{
            backgroundColor:
              active == 0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img className="mt-2" src={logo} width="150px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nav-text mr-4" href="/about">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-text" href="#pricing">
                  Log in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;

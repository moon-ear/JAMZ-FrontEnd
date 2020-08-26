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
    transition: 0.5s;
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

    if (pageYOffset >= 500 && active === 0) {
      this.setState({ active: 1 });
    } else if (pageYOffset < 600 && active === 1) {
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
            <Navbar.Brand href="#home">
              <img className="mt-2" src={logo} width="150px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nav-text mr-4" href="/">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-text mr-4" href="#features">
                  Contact
                </Nav.Link>
                <Nav.Link className="nav-text" href="#pricing">
                  Log in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <div style={{ height: "100%" }}>
        <Navbar sticky="top" className="header-area" expand="sm">
          <div id="sticky-header" className="main-header-area">
            <Navbar.Brand href="/">
              <img src={logo} width="150px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="main-menu  d-none d-lg-block text-center"
              id="basic-navbar-nav"
            >
              <Nav className="navigation mr-auto">
                <Nav.Link className="active" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div> */}

        {/* <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid p-0">
            <div className="row align-items-center no-gutters">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-img">
                  <a href="/">
                    <img src={logo} width="150px" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu  d-none d-lg-block text-center">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a className="active" href="/">
                          about us
                        </a>
                      </li>
                      <li>
                        <a className="active" href="">
                          contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 d-none d-lg-block">
                <div className="log_chat_area d-flex align-items-end">
                  <a href="#" data-scroll-nav="0" className="say_hi">
                    Say Hello
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </Styles>
    );
  }
}

export default NavigationBar;

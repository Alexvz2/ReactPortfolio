import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
//import './App.css'

const Icon = {
  padding: '15px',
  color: 'rgba(0, 0, 0, 0.5)',
};


class Navigation extends Component {
  scrollToTop = () =>{
    scroll.scrollToTop();
  };
    render(){
        return (
            <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Navbar.Brand  onClick={this.scrollToTop} className="nav-logo">Alex Vazquez</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        About Me
                      </Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="exp"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        Experience
                      </Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="proj"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        Projects
                      </Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        Skills
                      </Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >
                        Contact Me
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <div>
                    {/* <a> Resume</a> */}
                    <a href = "https://github.com/Alexvz2" target="_blank" rel="noopener noreferrer" style={Icon}> <FaGithub/> </a>
                    <a href = "https://www.linkedin.com/in/alex-vazquez/" target="_blank" rel="noopener noreferrer" style={Icon}> <FaLinkedin /> </a>
                  </div>
                  </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}


export default Navigation;


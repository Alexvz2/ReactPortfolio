import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navigation.css'
//import './App.css'

const Icon = {
  padding: '15px',
  color: 'rgba(0, 0, 0, 0.5)',
};


class Navigation extends Component {
    render(){
        return (
            <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Alex Vazquez</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About Me</Nav.Link>
                    <Nav.Link href="#Experience">Experience</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#Skills">Skills</Nav.Link>
                    <Nav.Link href="#Contact">Contact Me</Nav.Link>
                  </Nav>
                  <div>
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


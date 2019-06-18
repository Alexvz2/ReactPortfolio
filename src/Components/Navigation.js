import React, {Component} from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
//import './Navigation.css'
//import './App.css'

class Navigation extends Component {
    render(){
        return (
            <div>
       <Navbar bg="light" variant="light" sticky="bottom">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
      </div>
        );
    }
}

export default Navigation;


import React, {Component} from 'react';
import {Form, Container, Button} from 'react-bootstrap';


class Contact extends Component{
    render(){
        return(
            <Container style ={{paddingTop:'17rem'}}>
                <h1>Contact Me</h1>
                <Form style={{color:'#F5F5F5'}}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="textarea" placeholder="I want to hire you!" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
        );
    }
};


export default Contact;
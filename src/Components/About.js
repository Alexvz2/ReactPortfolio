import React, {Component} from 'react';
import './About.css'
//import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import {Container, Col, Row} from 'react-bootstrap'

class About extends Component {
    render(){
        return (

            <Container style={{marginTop:'10vh'}}>
                <Row>
                <Col xs={6}>
                    <div >
                        <img src={require('../img/Me.png')} className="img-rounded" alt="loading"/>
                    </div>
                </Col>
                <Col xs={6}>
                    <div >
                        <h2>About Me.</h2>
                        <p className="lead">My name is Alex Vazquez, I'm a UBC Engineering ECE student
                        based in Vancouver, BC. I graduated from high school with a Science based IB Diploma
                        from West Vancouver Secondary School in Vancouver.</p>
                        <p className="lead"> I am passionate about the intersection between Electrical and Computer Engineering, currently, I'am a Software Engineer(Explore) working for Microsoft in Redmond, while working on the Comms system of the BC Satellite, in Charge of decoding the telemetry data.</p>
                        <p className="lead">During school, I am a Senior Controls Engineer in UBC Orbit, Attitude Determination and Control Systems Sub-team,
                        where my job is to implement the detumbling controller and Kalman filter of the satellite.
                        </p>
                    </div>
                </Col>
                </Row>
            </Container>

           
        );
    }
}



export default About;
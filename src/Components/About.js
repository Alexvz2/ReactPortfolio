import React, {Component} from 'react';
import './About.css'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

class About extends Component {
    render(){
        return (
            <div>
            <ParallaxProvider >
                <Parallax y={[-20,0]} x={[0]}>
                    <div >
                        <img src={require('../img/Me.png')} className="img-rounded" alt="loading"/>
                    </div>
                </Parallax>
                <Parallax y={[0]} x={[20, 10]}>
                    <div >
                        <h2>About Me.</h2>
                        <p className="lead">My name is Alex Vazquez, I'm a UBC Engineering ECE student
                        based in Vancouver, BC. I graduated from high school with a Full IB Diploma
                        from West Vancouver Secondary School in Vancouver.</p>
                        <p className="lead"> I am passionate about the intersection between Electrical and Computer Engineering, currently, I am working on a personal project  which consists on transforming
                        a digital motorcycle speedometer into an AI alarm clock which connects remotely to my computer through
                        the use of a raspberry pi and using ML analyzes the patterns of when I set the alarm to predicts at what
                        time I'll set the alarm for the current day.</p>
                        <p className="lead">Currently,I am an junior software developer intern working for Microsoft in Redmond. During school, I am a Senior Controls Engineer in UBC Orbit, Attitude Determination and Control Systems Sub-team,
                        where my job is to implement the detumbling controller and Kalman filter of the satellite.
                        </p>
                    </div>
                </Parallax>
            </ParallaxProvider>
            </div>
        );
    }
}



export default About;
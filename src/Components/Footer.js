import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Icon = {
    display: 'inline-block',
    padding: '15px',
    fontsize: '100%', 
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
};


class Foot extends Component{
    render(){
        return(
            <div style={{position:'absolute', left:'0', bottom:'0', right:'0'}}>
                <Container fluid style={{backgroundColor:'#f8f9fa'}}>
                    <Row>
                        <Col sm={true}>
                        <h3 style={{textAlign:'center', textDecoration:'underline', color:'rgba(0, 0, 0, 0.9)'}}>About</h3>
                        <br/>
                        <div style={{color: 'rgba(0, 0, 0, 0.5)',  textAlign: 'center'}} >
                        <p> This Online Portfolio, is the ReactJS Version of my Original Portfolio</p>
                        <a href="http://alexvazquez.xyz/" target="_blank" rel="noopener noreferrer" > Portfolio 1.0</a>
                        </div>
                        </Col>
                        <Col sm={true}>
                        <h3 style={{textAlign:'center', textDecoration:'underline'}}>Connect</h3>
                        <div style={{textAlign: 'center'}}>
                            <a href = "https://github.com/Alexvz2" target="_blank" rel="noopener noreferrer" style={Icon}> <FaGithub size={30}/> </a>
                            <a href = "https://www.linkedin.com/in/alex-vazquez/" target="_blank" rel="noopener noreferrer" style={Icon}> <FaLinkedin size={30}/> </a>
                        </div>
                        </Col>
                        <Col sm={true}>
                            <img src={require('../img/Gif/vz2.gif')} alt='Loading' style={{ width:'50%', display:'block', marginLeft:'auto', marginRight:'auto'}}/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{textAlign:'center', backgroundColor:'#F5F5F5'}}>
                    <p >© Alex Vazquez, 2019.</p>
                </Container>
            </div>
            
        );
    }
};


export default Foot;

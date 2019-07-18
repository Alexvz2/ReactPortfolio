import React, {Component} from 'react';
import { Tabs, Tab, Container, Card, CardColumns, Badge } from 'react-bootstrap';
import { FaGithub, FaPlus } from 'react-icons/fa';


class ProjectsTab extends Component {
    constructor(props, context){
        super(props, context);
        this.state ={
            key: 'SW'
        };
    }
    render() {
        return (
        <Container className='Projects' style ={{paddingBottom:'5rem', paddingTop:'5rem'}}>
            <h1> Projects</h1>
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            defaultActiveKey="SW"
            onSelect={key => this.setState({ key })}
            
          >
            <Tab eventKey="SW" title="Software">
                <Projects pType = "SW"/>
            </Tab>
            <Tab eventKey="HW" title="Hardware">
                <Projects pType = "HW"/>
            </Tab>
            <Tab eventKey="UBC" title="School Projects" >
                <Projects pType = "UBC"/>
            </Tab>
            <Tab eventKey="Orbit" title="Orbit" >
                <Projects pType = "Orbit"/>
            </Tab>
            <Tab eventKey="Hack" title="Hackathons" >
                <Projects pType = "Hack"/>
            </Tab>
          </Tabs>
          </Container>

        
        );
      }
}



class Projects extends Component{
    render(){
        const pType = this.props;
        
         if ( {pType} === "SW"){
            return (
            <CardColumns>
                <PCards title = "Loopy App" projectName = "Alexvz2/Loopy" text = "Coming soon"  badgeOne= "PWA" badgeTwo= "JS" badgeThree= "Node" badgeFour = "React" />
                <PCards title = "React Portfolio" projectName = "Alexvz2/ReactPortfolio" text = "AX25"  badgeOne= " " badgeTwo= " " badgeThree= " " badgeFour = " " />
                <PCards title = "Portfolio Form Api" projectName = "Alexvz2/PortfolioFormAPI" text = "AX25"  badgeOne= " " badgeTwo= " " badgeThree= " " badgeFour = " " />
                <PCards title = "Jenkins-Slack Bot" projectName = "Alexvz2/Slack-to-Jenkins-Bot" text = "Jenkins Automatization Supervised through Slack"  badgeOne= "Python" badgeTwo= "Slack API" badgeThree= "json" badgeFour = " Jenkins" />
                <PCards title = "AI-larm" projectName = "Alexvz2/ailarm" text = "Machine Learning Alarm Prediction"  badgeOne= "Python" badgeTwo= "GCP" badgeThree= "Machine Learning" badgeFour = "Panda" />
                <PCards title = "Freday" projectName = "Alexvz2/Loopy" text = "Organizational App, currently private"  badgeOne= "reactNative" badgeTwo= "SQL" badgeThree= "NodeJS" badgeFour = "Postgres" /> 
            </CardColumns>);
        }
        else if ( {pType} === "HW"){
            return (
            <CardColumns>
                <PCards title = "MotorCycle" projectName = "Alexvz2" text = "Re-Building a 1985 motorcycle"  badgeOne= "Wiring" badgeTwo= "Mechanical" badgeThree= "PCB" badgeFour = "Fun" />
                <PCards title = "Drones" projectName = "Alexvz2" text = "DIY Instructable for custom drone"  badgeOne= "Quads" badgeTwo= "LQR Controller" badgeThree= " " badgeFour = " " />
                <PCards title = "Raspberry Pi Cluster" projectName = "Alexvz2" text = "Raspberry Pi Cluster Computing Server"  badgeOne= " " badgeTwo= " " badgeThree= " " badgeFour = " " />
                <PCards title = "Raspberry Pi Server" projectName = "Alexvz2" text = "Raspberry Pi Cluster Computing Server"  badgeOne= " " badgeTwo= " " badgeThree= " " badgeFour = " " />
                <PCards title = "Raspberry Pi Computer" projectName = "Alexvz2" text = "The SmallRaspberry Pi Computer."  badgeOne= " " badgeTwo= " " badgeThree= " " badgeFour = " " />  
            </CardColumns>);
        } 
        else if ( {pType} === "UBC"){
            return (
            <CardColumns>
                <PCards title = "OrcaSat Decoder" projectName = "Alexvz2/OrcaSatDecoder" text = "OrcaSat Ground Station telemetry Decoder for Elec400s"  badgeOne= "Python" badgeTwo= "Unix" badgeThree= "GnuRadio" badgeFour = "Crypto" />
                <PCards title = "DE1-SoC Program" projectName = "Alexvz2/Cpen211" text = "MicroComputer Verilog Program"  badgeOne= "Verilog" badgeTwo= "DE1-SOC" badgeThree= "CPEN 211"/>
                <PCards title = "DAQ Module" projectName = "Alexvz2/OrcaSatDecoder" text = "Simon Say's Game"  badgeOne= "DAQ" badgeTwo= "C" badgeThree= "ASPC 160"/>
                <PCards title = "Arduino Claw" projectName = "Alexvz2/OrcaSatDecoder" text = "APSC Mechanical Arduino Claw"  badgeOne= "C" badgeTwo= "Arduino" badgeThree= "SolidWorks" badgeFour = "APSC 101" />
            </CardColumns>);
        }
        else if ( {pType} === "Orbit"){
            return (
            <CardColumns>
                <PCards title = "Detumbling Controller" projectName = "UBCOrbit" text = "Implemented in C++ a detumbling algorithm using PID Control theory and B-dot controllers"  badgeOne= "Python" badgeTwo= "Unix" badgeThree= "GnuRadio" badgeFour = "Crypto" />
                <PCards title = "Kalman Filter" projectName = "UBCOrbit" text = "Implemantation of Kalman Filter Protocol designed by Wyatt into C++ code."  badgeOne= "Verilog" badgeTwo= "DE1-SOC" badgeThree= "CPEN 211"/>
                <PCards title = "STM32 and IMU" projectName = "Alexvz2/STM32-IMU-Reader" text = "Implemantation of IMU controller for STM32"  badgeOne= "DAQ" badgeTwo= "C" badgeThree= "ASPC 160"/>
                <PCards title = "ADCS PCB Design" projectName = "Alexvz2/OrcaSatDecoder" text = "SunSensor PCB Design and Fabrication"  badgeOne= "Altium Designer" badgeTwo= "Circuitry " badgeThree= "PCB Manufacturing and Assembly"/> 
            </CardColumns>);
        }
        else if ( {pType} === "Hack"){
            return (
            <CardColumns>
                <PCards title = "Copy2Cat" projectName = "Alexvz2" text = "Microsoft phishing attack simulator"  badgeOne= "Python" badgeTwo= "ReactJS" badgeThree= "Hacking" badgeFour = "Security" />
                <PCards title = "Book It" projectName = "Alexvz2/bookit_vap" text = "Study space availability based off Access Points Mac Addresses and BSSIDS"  badgeOne= "Python" badgeTwo= "Unix" badgeThree= "AirCrack" badgeFour= "Network-Monitoring"/>
                <PCards title = "Small Steps" projectName = "basilwong/small_steps" text = "Implemantation of IMU controller for STM32"  badgeOne= "React Native " badgeTwo= "FireBase" badgeThree= "FitBit API"/>
            </CardColumns>);
        }
        

        return(
            <CardColumns>
                <PCards title = "Well This Is Awkward" projectName = "Alexvz2" text = "Empty" />

            </CardColumns>
                

        );
    }
}


class PCards extends Component{
    render(){
        const {
            title, 
            text,
            projectName,
            badgeOne, 
            badgeTwo,
            badgeThree, 
            badgeFour
        } = this.props;
        return(
            <Card >
                <Card.Img variant="top" src={require('../img/ParallaxImg/Galaxy.jpg')} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {text}
                             </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">{badgeOne}</Badge>
                            <Badge variant="warning">{badgeTwo}</Badge>
                            <Badge variant="success">{badgeThree}</Badge>
                            <Badge variant="info">{badgeFour}</Badge>
                            <a href = {"https://github.com/" + {projectName}} target="_blank" rel="noopener noreferrer" > <FaGithub/> </a>
                            <a href = {"https://github.com/" + {projectName}} target="_blank" rel="noopener noreferrer" > <FaPlus/> </a>
                        </Card.Footer>
            </Card>
        );
    }
}




export default ProjectsTab
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
        <Container className='Projects'>
            <h1> Projects</h1>
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            defaultActiveKey="SW"
            onSelect={key => this.setState({ key })}
            
          >
            <Tab eventKey="SW" title="Software">
                <Projects/>
            </Tab>
            <Tab eventKey="HW" title="Hardware">
                <Projects/>
                <Projects/>
            </Tab>
            <Tab eventKey="UBC" title="School Projects" >
                <Projects/>
            </Tab>
            <Tab eventKey="Orbit" title="Orbit" >
                <Projects/>
            </Tab>
            <Tab eventKey="Hack" title="Hackathons" >
                <Projects/>
            </Tab>
          </Tabs>
          </Container>

        
        );
      }
}



class Projects extends Component{
    render(){
        return(
            <CardColumns>
                <PCards/>
                <PCards/>
                <PCards/>
                <PCards/>
                <PCards/>  
            </CardColumns>

        );
    }
}


class PCards extends Component{
    render(){
        return(
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">ReactJS</Badge>
                            <Badge variant="warning">NodeJS</Badge>
                            <Badge variant="success">Bootstrap</Badge>
                            <Badge variant="info">Bootstrap</Badge>
                            <a href = "https://github.com/Alexvz2" target="_blank" rel="noopener noreferrer" > <FaGithub/> </a>
                            <a href = "https://github.com/Alexvz2" target="_blank" rel="noopener noreferrer" > <FaPlus/> </a>
                        </Card.Footer>
            </Card>
        );
    }
}




export default ProjectsTab
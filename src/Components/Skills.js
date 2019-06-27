import React, {Component} from 'react';
import { Container, ProgressBar, Row, Col} from 'react-bootstrap';
import Python from '../img/Skills/Python.png'
import Cplus from '../img/Skills/Cplus.png'
import JS from '../img/Skills/JS.png'
import SQL from '../img/Skills/SQL.png'



class Skills extends Component{
    render(){
        return(
            <Container style ={{paddingTop:'5rem'}}>
                <h1>Skills</h1>
                <h3 style={{color:'#fff'}}>Programming Languages</h3>
                <SkillBar name='Python' percentage='95' imgUrl ={Python}/>
                <SkillBar name='C++' percentage='70' imgUrl ={Cplus}/>
                <SkillBar name='JS(React, Node)' percentage='60' imgUrl ={JS}/>
                <SkillBar name='SQL' percentage='90' imgUrl ={SQL}/>
                <div/>
                <h3 style={{color:'#fff'}}>Software</h3>
                <SkillBar name='Altium' percentage='95' imgUrl ={Python}/>
                <SkillBar name='Matlab' percentage='70' imgUrl ={Cplus}/>
                <SkillBar name='Minerva' percentage='60' imgUrl ={JS}/>
                <SkillBar name='AGI STK' percentage='90' imgUrl ={SQL}/>
                <div/>
                <h3 style={{color:'#fff'}}>Hardware</h3>
                <SkillBar name='Raspberry Pi' percentage='95' imgUrl ={Python}/>
                <SkillBar name='Arduino' percentage='70' imgUrl ={Cplus}/>
                <SkillBar name='STM32' percentage='60' imgUrl ={JS}/>
                <SkillBar name='CPEN' percentage='90' imgUrl ={SQL}/>
            </Container>
        );
    }
}


class SkillBar extends Component{
    render(){
        const  {
            name,
            imgUrl,
            percentage,
            // years
                } = this.props;

        // skillColour() {
        //     const {percentage} = this.props.percentage;
        //     if (percentage >= 75){
        //         return "success";
        //     }
        //     if (percentage >= 50 ){
        //         return "warning";
        //     }
        //     else {
        //         return "danger";
        //     }
        // };
        return(
                <Row style={{paddingTop: "1.5rem"}}>
                    <Col xs={4} md={2}>
                        <img src={imgUrl} style={{ maxWidth: '5rem', maxHeight: '5rem' }} alt='loading..'/>
                    </Col>
                    <Col lg={true} >
                        <h3 style={{color: '#fff'}}>{name}</h3>
                        <ProgressBar animated now={percentage} variant="info" striped/>
                    </Col>
                </Row>
        );
    }
}

export default Skills
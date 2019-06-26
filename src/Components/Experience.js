import React, {Component} from 'react';
import ParallaxCard from 'react-parallax-card';
import { Container, Row } from 'react-bootstrap';
import Microsoft from '../img/Companies/MicrosoftLogo.png'
import Inetco from '../img/Companies/Inetco.png'
import Bowman from '../img/Companies/Bowman.png'
import Orbit from '../img/Companies/Orbit.png'


class Experience extends Component{
    render(){
        return(
            <Container style ={{paddingBottom:'5rem'}}>
                 <h1>Experience</h1>
                <Row>
                <PxCards logoUrl={Bowman} title='Bowman Technologies ---- Software Engineer --------- Vancouver, CA 2017'/>
                <PxCards logoUrl={Orbit} title='UBC Orbit ------------------- Senior Controls Engineer --- Vancouver, CA 2017'/>
                <PxCards logoUrl={Inetco} title='Inetco LTD --------------- Software Engineer --------- Burnaby, CA 2018'/>
                <PxCards logoUrl={Microsoft} title='Microsoft ---------------- Software Engineer(Explorer) ----- Redmond, USA 2019'/>
                </Row>
            </Container>
        );
    }
};



class  PxCards extends Component{
    render(){
        const {
            logoUrl,
            title
                } = this.props;
        return(
            <ParallaxCard
                    label={title}
                    enableRotate
                    enableTransform
                    style={{ margin: '0 auto', width: 240, height: 240 }}
                    >
                        <img src={logoUrl} style={{ maxWidth: '100%', maxHeight: '100%' }} alt='loading..'/>
                        <div />
                </ParallaxCard>
        );
    }
}

export default Experience
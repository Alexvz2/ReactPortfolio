import React, {Component} from 'react';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from './Parallax.scss';
import Typist from 'react-typist';


//import './App.css'


const parallaxLayers =[
    {
        image: require('./../img/ParallaxImg/5Clouds.png'),
        amount:0,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/4BackM.png'),
        amount:0.0,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/3FrontM.png'),
        amount:0.06,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/2BackTrees.png'),
        amount:0.08,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/1FrontN.png'),
        amount:0.12,
        expanded: false,
        
    },
    {
        amount:0.1,
        expanded: false,
        children: (
            <Typist 
                avgTypingDelay={80}
                startDelay={2000}
                cursor={{ hideWhenDone: true }}
                //onTypingDone={this.onHeaderTyped}
                >
                    <div style={{fontSize: '10vh', color:'#00000', textAlign: 'center', lineHeight: '10vh', marginTop:'10vh' }}> 
                        Hello, My Name is Alex.<br/>I'm..
                        
                    </div>

            </Typist>),
    },
    {
        amount:0.12,
        expanded: false,
        children: (
            <div style={{fontSize: '5vh', color:'#fff', textAlign: 'center', lineHeight: '7vh', marginTop:'60vh' }}>
            <Typist
              cursor={{ hideWhenDone: true }}
              avgTypingDelay={80}
              startDelay={2200}
            >
                <Typist.Delay ms={2000} />
              * An Electrical & Computer Engineering Student at UBC
              <Typist.Delay ms={1250} />
              <br />
              * A Senior Controls Developer for Orbit
              <Typist.Delay ms={1250} />
              <br />
              * Currently Working as a devel<Typist.Delay ms={500} />oper
              <Typist.Backspace count={9} delay={1000} />
              <Typist.Delay ms={750} />
               SWE for Microsoft.
              <Typist.Delay ms={1250} />
              <br />
              *Learn more
            </Typist>
        </div>),
    },

    
];

class ParallaxHeader extends Component {
    state = {
        renderMsg: false,
      }
    
      onHeaderTyped = () => {
        this.setState({ renderMsg: true });
      }
    render(){
        return (
            <ParallaxProvider>
            <div className="vertical">
                <div className={styles.bannerContainer}>
                    <ParallaxBanner
                        className={styles.bannerBg}
                        layers={parallaxLayers}
                        style={{ height: '100vh' }}>
                    </ParallaxBanner>
                </div>
            </div>
        </ParallaxProvider>

        );
    }
}



export default ParallaxHeader;



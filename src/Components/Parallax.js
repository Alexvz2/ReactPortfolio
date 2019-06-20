import React, {Component} from 'react';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from './Parallax.css';
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
        amount:0,
        expanded: false,
        children: (<Typist style={{fontSize: '10vh', color:'#000000', textAlign: 'center', lineHeight: '120vh' }}>Hello, My Name is Alex</Typist>),
    },
    
];

class ParallaxHeader extends Component {
    render(){
        return (
            <ParallaxProvider>
            <div className="vertical">
                <div className={styles.bannerContainer}>
                    <ParallaxBanner
                        className={styles.bannerBg}
                        layers={parallaxLayers}
                        style={{ height: '100vh' }}>
                        
                        <h1 style={{fontSize: '10vh', color:'#000000', textAlign: 'center', lineHeight: '120vh' }}>Text to Show</h1>
                        <Typist style={{fontSize: '10vh', color:'#000000', textAlign: 'center', lineHeight: '120vh' }}>Animated Text to Show</Typist>
                    </ParallaxBanner>
                </div>
            </div>
        </ParallaxProvider>

        );
    }
}



export default ParallaxHeader;



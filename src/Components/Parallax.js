import React, {Component} from 'react';
import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import styles from './Parallax.css';
//import './App.css'


const parallaxLayers =[
    {
        image: require('./../img/ParallaxImg/5Clouds.png'),
        amount:0,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/4BackM.png'),
        amount:0.05,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/3FrontM.png'),
        amount:0.06,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/2BackTrees.png'),
        amount:0.07,
        expanded: false,
    },
    {
        image: require('./../img/ParallaxImg/1FrontSpace.png'),
        amount:0.12,
        expanded: false,
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
                        style={{ height: '100vh' }}
                    >
                        <div className={styles.parallaxChildren}>
                            <h1>Hello, My Name is Alex</h1>
                        </div>
                    </ParallaxBanner>
                </div>
            </div>
        </ParallaxProvider>

        );
    }
}



export default ParallaxHeader;



import React, {Component} from 'react';
//import './Parallax.css'
import {ParallaxBanner} from 'react-scroll-parallax';
//import styles from './Parallax.css';
//import './App.css'


const parallaxLayers =[
    {
        image: './../img/apple.png',
        amount:0.1,
    },
    {
        image: './../img/apple.png',
        amount:0.1,
    },
    
];

class ParallaxHeader extends Component {
    render(){
        return (
                        
                        <ParallaxBanner
                            layers = {parallaxLayers}
                            style={{height: '80%'}}
                        >
                            <h1>Hello Im alex</h1>
                        </ParallaxBanner>

        );
    }
}



export default ParallaxHeader;



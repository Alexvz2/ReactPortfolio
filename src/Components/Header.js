import React, {Component} from 'react';
import Background from './../img/ParallaxImg/5Clouds.png';
import './Header.css';



const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '50vh',
    backgroundSize: 'cover'
}


class Header extends Component{
    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>My Name Is Alex</p>
            </header>
        );
    }
};

export default Header;
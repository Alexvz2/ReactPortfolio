import React, {Component} from 'react';
import './Navigation.css'
//import './App.css'

class Navigation extends Component {
    render(){
        
        return (
            <div>
        <nav>
          <ul id="mainNav">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>    
          </ul>
        </nav>
        <section id="home"><h2>Home</h2></section>
        <section id="work" data-sr><h2>Work</h2></section>
        <section id="about"><h2>About</h2></section>
        <section id="contact"><h2>Contact</h2></section>
      </div>
        );
    }
}

export default Navigation;


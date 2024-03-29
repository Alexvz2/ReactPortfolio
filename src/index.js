import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Components/Navigation';
import About from './Components/About';
import ParallaxHeader from './Components/Parallax';
import Experience from './Components/Experience';
import Foot from './Components/Footer';
import ProjectsTab from './Components/Projects';
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import './root.scss';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    render(){
        return(
            <div>
             <Navigation/>
            <ParallaxHeader
            id="home"/>
            <About
            id="about"/>
            <Experience
            id="exp"/>
            <ProjectsTab
            id="proj"/>
            <Skills
            id="skills"/>
            <Contact
            id="contact"/>
            <Foot/>
            </div>

        );
    }
};



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

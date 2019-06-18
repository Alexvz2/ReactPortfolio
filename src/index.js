import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Components/Navigation';
 import About from './Components/About'
import ParallaxHeader from './Components/Parallax'
//import './root.scss'

class App extends Component{
    render(){
        return(
            <div>
                <ParallaxHeader/>
             <Navigation LogoTitle = "Alex "/>
            <ParallaxHeader/>
            <About></About>  
            </div>

        );
    }
};



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

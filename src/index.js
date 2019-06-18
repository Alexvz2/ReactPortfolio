import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Components/Navigation';
// import Header from './Components/Header';
// import About from './Components/About'
// import ParallaxHeader from './Components/Parallax'
// //import './root.scss'
// import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component{
    render(){
        return(
            <div>
                <Navigation LogoTitle = "Alex "/>
                {/* <Header title="Hello"></Header>
                <About></About> 
                <ParallaxProvider>
                    <ParallaxHeader/>
                </ParallaxProvider> */}
                
            </div>

        );
    }
};



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

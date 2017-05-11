import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js";
import Profile from "./components/Profile.js";
import Abilities from "./components/abilities/Abilities.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";

import './App.less';

var Scroll = require('react-scroll');
var Element = Scroll.Element;
var Events = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;
var scroll     = Scroll.animateScroll;

export default class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     scroled: false
  //   }
  // }

  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function(to, element) {});
  //   Events.scrollEvent.register('end', function(to, element) {});

  //   scrollSpy.update();
  // }

  render() {
    return (
      <div>
          <NavigationBar/>
          <Banner />
          <Profile />
          <Abilities />
          <Resume />
          <Footer/>
      </div>
    )
  }
}




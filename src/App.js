import React, {Component} from 'react';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js";
import Profile from "./components/Profile.js";
import Abilities from "./components/abilities/Abilities.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";

import './App.less';

export default class App extends Component {
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




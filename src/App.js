import React, {Component} from 'react';
// import Button from 'react-bootstrap/lib/Button';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js";
import Profile from "./components/Profile.js";
import Abilities from "./components/Abilities.js";
import Resume from "./components/Resume.js";


import Footer from "./components/Footer.js";


//styles
import './App.less';
import './App.scss';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Banner />
        <Profile />
        <Abilities />
        <Resume />
        
        <Footer/>
      </div>
    )
  }
}

export default App;

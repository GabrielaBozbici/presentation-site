import React, {Component} from 'react';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js";
import Profile from "./components/Profile.js";
import Abilities from "./components/abilities/Abilities.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";


//styles
import './App.less';

class App extends Component {
  
  resizeChange(){
    window.addEventListener('resize', function(event){
      console.log('works');
    });
  }

  render() {
    this.resizeChange();
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


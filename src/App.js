import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js";
import Profile from "./components/Profile.js";
import Abilities from "./components/abilities/Abilities.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";

var Scroll = require('react-scroll');
var Events = Scroll.Events;

//styles
import './App.less';

class App extends Component {
  constructor(){
    super();
    this.state = {
      scroled: false
    }
  }

  _handleScroll(ev) {
      if( ev.target.scrollTop > 100) {
        this.setState({scroled: true});
      } else {
        this.setState({scroled: false});
      }
  }
  componentDidMount() {
      const element = ReactDOM.findDOMNode(this.refs.wrap);
      element.addEventListener('scroll', this._handleScroll.bind(this));
  }

  componentWillUnmount() {
      const element = ReactDOM.findDOMNode(this.refs.wrap)
      element.removeEventListener('scroll', this._handleScroll.bind(this));
  }

  render() {
    return (
      <div className="Wrap"
        ref="wrap"
      >
          <NavigationBar scroled={this.state.scroled} />
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


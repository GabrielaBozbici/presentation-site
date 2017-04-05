import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner.js"


//styles
import './App.less';
import './App.scss';
import './App.styl';
import styles from './Modules.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Banner />
      </div>
    )
  }
}

export default App;

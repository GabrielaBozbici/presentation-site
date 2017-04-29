import React, {Component} from 'react';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class NavigationBar extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: '',
            menuItems: ['PROFILE', 'ABILITIES', 'RESUME', 'CONTACT'],
            isClicked: false,
            transparent: false,
        }
    }

    clickMenu(){
        let currentToggleState = this.state.isClicked;
        this.setState({
            isClicked: !currentToggleState
        });
    }

    scrollTo(element) {
        scroll.scrollTo(element);
    }
    componentWillReceiveProps(newProps){
        console.log('newProps', newProps);
        if(newProps.scroled){
            this.setState({transparent: true});
        } else {
            this.setState({transparent: false});
        }
    }
    render(){
        return(
            <nav className={`navbar navbar-fixed-top navbar-default ${this.state.transparent ? 'black' : 'transparent'}`} role="navigation" data-spy="affix" data-offset-top="0" data-offset-bottom="200" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"  onClick={this.clickMenu.bind(this)}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className={`collapse navbar-collapse ${this.state.isClicked ? 'collapse in' : ''}`}>
                    <ul className="nav navbar-nav">
                        {this.state.menuItems.map((Item) => {
                            return (
                                <li key={Item}>
                                    <Link  onClick={() => this.setState({isClicked: false})}
                                        className={this.state.activeItem === Item ? "active" : ''}
                                        to={Item} spy={true} offset={-50}>{Item}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}



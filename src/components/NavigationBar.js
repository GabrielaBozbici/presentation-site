import React, {Component} from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

export default class NavigationBar extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: '',
            menuItems: ['PROFILE', 'ABILITIES', 'RESUME', 'CONTACT'],
            isClicked: false,
        }
    }

    clickMenu(){
        let currentToggleState = this.state.isClicked;
        this.setState({
            isClicked: !currentToggleState
        });
    }
        
    render(){
        return(
            <nav className="navbar navbar-fixed-top navbar-default black " role="navigation" data-spy="affix">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"  onClick={this.clickMenu.bind(this)}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <div className="clear"></div>
                        </button>
                    </div>
                    
                    <div className={`collapse navbar-collapse ${this.state.isClicked ? 'collapse in' : ''}`}>
                        <ul className="nav navbar-nav">
                            {this.state.menuItems.map((Item) => {
                                return (
                                    <li key={Item}>
                                        <Link 
                                        to={Item} 
                                        spy={true} 
                                        smooth={true}
                                        offset={-50}
                                        duration={300}
                                        delay={0}
                                        >{Item}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}



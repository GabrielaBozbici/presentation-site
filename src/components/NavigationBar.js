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
            transparent: true,
        }
    }

    clickMenu(){
        console.log("menu is clicked");
        let currentToggleState = this.state.isClicked;
        this.setState({
            isClicked: !currentToggleState,
            transparent: false
        });
    }

    scrollTo(Item) {
        console.log('scrollTo');
        scroll.scrollTo(Item);
    }

    componentWillReceiveProps(newProps){
        if(newProps.scroled){
            this.setState({transparent: false});
        } else {
            this.setState({transparent: true});
        }
    }

    handleClick(Item){
        console.log('handleClick', Item);
        this.scrollTo(Item);
        this.setState({isClicked: true, activeItem: Item})
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

  }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    

    test(){
        this.scrollTo()
    }

    render(){
        return(
            <nav className={`navbar navbar-fixed-top navbar-default ${this.state.transparent ? 'transparent' : 'black'}`} role="navigation" data-spy="affix" data-offset-top="0" data-offset-bottom="200" >
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
                                        offset={-50}
                                        onClick={() => this.handleClick(Item)}
                                        className={this.state.activeItem === Item ? "active" : ''}
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



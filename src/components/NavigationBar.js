import React, {Component} from 'react';

export default class NavigationBar extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false
        }
    }
    componentWllMount(){
        console.log("initial state: ", this.state)
    }
    handleClick(){
        let currentClickState = this.state.isClicked;
        this.setState({
            isClicked: !currentClickState
        });
        console.log("click", this.state)
    }
    render(){
        return(
            <nav className="navbar navbar-default" role="navigation"data-spy="affix" data-offset-top="100">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collpase">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collpase">
                    <ul className="nav navbar-nav">
                        <li className={this.state.isClicked ? "active" : ""} onClick={this.handleClick.bind(this)}>Profile</li>
                        <li>Abilities</li>
                        <li>Resume</li>
                        <li>Contact me</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

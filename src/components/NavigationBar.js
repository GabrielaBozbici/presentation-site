import React, {Component} from 'react';

export default class NavigationBar extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: '',
            menuItems: ['PROFILE', 'ABILITIES', 'RESUME', 'CONTACT ME']
        }
    }
    handleClick = (Item) => {
        this.setState({
            activeItem: Item
        });
    }
    render(){
        return(
            <nav className="navbar navbar-fixed-top navbar-default" role="navigation" data-spy="affix" data-offset-top="0" data-offset-bottom="200" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse .navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        {/*<li className={this.state.activeItem === "Profile"  ? "active" : "inactive"} onClick={ () => this.handleClick('Profile')}>Profile</li>
                        <li className={this.state.activeItem === "Abilities" ? "active" : "inactive"} onClick={ () => this.handleClick('Abilities')}>Abilities</li>
                        <li className={this.state.activeItem === "Resume" ? "active" : "inactive"} onClick={ () => this.handleClick('Resume')}>Resume</li>
                        <li className={this.state.activeItem === "Contact me" ? "active" : "inactive"} onClick={ () => this.handleClick('Contact me')}>Contact me</li>*/}
                        {this.state.menuItems.map((Item) => {
                            return <li key={Item} className={this.state.activeItem === Item ? "active" : ''} onClick={() => this.handleClick(Item)}>{Item}</li>
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}



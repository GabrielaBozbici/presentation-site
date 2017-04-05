import React, {Component} from 'react';

export default class NavigationBar extends Component {
    render(){
        return(
            <div className="navbar navbar-default" role="navigation">
                <div className="container navigationB">
                    <ul>
                        <li className="btn">About</li>
                        <li className="btn">Resume</li>
                        <li className="btn">My life in pictures</li>
                    </ul>
                </div>
            </div>
        )
    }
}

// className="nav pull-right navbar-nav"
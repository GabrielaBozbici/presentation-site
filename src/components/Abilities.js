import React, {Component} from 'react';

export default class Abilities extends Component {
    render(){
        return(
            <div className="container abilities">
                <h2 className="text-center">Abilities</h2>
                <h3>Developer Skills</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap framework</li>
                            <li>Less</li>
                            <li>Version Control: Git</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>Flux</li>
                        <li>JQuery</li>
                        <li>Object Oriented Programming</li>
                        </ul>
                    </div>
                </div>
                <h3>Languages</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>Romanian (Native language)</li>
                            <li>English (Advanced)</li>
                            <li>Spanish (Medium)</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>French (Medium)</li>
                            <li>Italian (Begginer)</li>
                            <li>Dance (Latino)</li>
                        </ul>
                    </div>
                </div>
                <h3>Tools</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>Mac OS</li>
                            <li>Atom</li>
                            <li>Visual Code Studio</li>
                            <li>Sublime Text</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>Chrome</li>
                            <li>Chrome DevTools</li>
                            <li>Windows</li>
                            <li>MS Office Suite</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

export default class Abilities extends Component {
    render(){
        return(
            <div className="abilities">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col">
                            <h2 className="text-center">Abilities</h2>
                        </div>
                        <div className="col-sm-12 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                            <h3>Developer Skills</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                            <ul className="list-unstyled">
                                <li>
                                    <span className="title">HTML5</span>
                                    <span className="score ">
                                        <span className="glyphicon glyphicon-star filled"></span>
                                        <span className="glyphicon glyphicon-star filled"></span>
                                        <span className="glyphicon glyphicon-star filled"></span>
                                    </span>
                                </li>
                                <li>
                                    <span className="title">CSS3</span>
                                    <span className="score ">
                                        <span className="glyphicon glyphicon-star filled"></span>
                                        <span className="glyphicon glyphicon-star filled"></span>
                                        <span className="glyphicon glyphicon-star filled"></span>
                                    </span>
                                </li>
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
                    <div className="row">
                        <div className="col-sm-12 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                            <h3>Tools</h3>
                        </div>
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
                    <div className="row">
                        <div className="col-sm-12 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                            <h3>Languages</h3>
                        </div>
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
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

export default class Resume extends Component{
    render(){
        return(
            <div className="container resume">
                <div className="row experience">
                    <div className="col-sm-12 col">
                        <h2 className="text-center">Resume</h2>
                    </div>
                    <div className="col-sm-12 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <h3>Experience</h3>
                    </div>
                    {/*<div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>Self-taught Frontend Developer: September 2016- present</li>
                            <li>Web Scraper: July 2016- September 2016</li>
                            <li>Procurement Analyst: July 2014- July 2016</li>
                        </ul>
                    </div>*/}
                    <div className="eduCard col-sm-4 col-xs-8 col-xs-offset-1 col-sm-offset-0 text-center">
                        <div className="box">
                            <h4>Self-taught Frontend Developer</h4>
                            <span className="text-center">(September 2016 - present)</span>
                        </div>
                    </div>
                    <div className="eduCard col-sm-4 col-xs-8 col-xs-offset-1 col-sm-offset-0 text-center">
                        <div className="box">
                            <h4>Web Scraper</h4>
                            <span>(July 2016 - September 2016)</span>
                        </div>
                    </div>
                    <div className="eduCard col-sm-4 col-xs-8 col-xs-offset-1 col-sm-offset-0 text-center">
                        <div className="box">
                            <h4>Procurement Analyst</h4>
                            <span className="text-center">(September 2016 - present)</span>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <h3>Education</h3>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-1 col-sm-offset-0">
                        <ul className="list-unstyled">
                            <li>
                                <h4>Master's degree: 2012 - 2014</h4>
                                <p>Faculty of Economics and Business Administration, Cluj-Napoca</p>
                                <p>Major: Banks and Capital Markets</p>
                            </li>
                            <li>
                                <h4>Bachelor's degree: 2009 - 2012</h4>
                                <p>Faculty of Economics and Business Administration, Cluj-Napoca</p>
                                <p>Major: Finance and Banks</p>
                            </li>
                           <li>
                               <h4>Highschool: 2005 - 2009</h4>
                               <p>National College “George Cosbuc”, Bistrita- Nasaud</p>
                               <p>Major: Mathematics and Informatics</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <button className="buttonCv text-center">Download full resume</button>
                    </div>
                </div>
                
            </div>
        )
    }
}


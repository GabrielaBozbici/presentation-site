import React, {Component} from 'react';
import CV from "../assets/GabrielaBOZBICIcv.pdf";
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var scroll     = Scroll.animateScroll;

export default class Resume extends Component{
    scrollToTop(){
        scroll.scrollToTop();
    }
    render(){
        return(
            <Element name="RESUME" className="RESUME">
                <div className="container resume" id="resume">
                    <div className="row experience">
                        <div className="col-sm-12 col">
                            <h2 className="text-center">Resume</h2>
                        </div>
                        <div className="col-sm-12 col-xs-12">
                            <h3>Experience</h3>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Frontend Developer</h4>
                                <div className="text-center period">September 2016 - present</div>
                                <a href="#"><span className="glyphicon glyphicon-map-marker"></span>
                                Self- taught</a>
                                <p className="description">
                                    <span className="glyphicon glyphicon-pencil"></span>
                                    My curiosity drove me to this path of learning frontend. I started shy with some online courses and got more and more interested in becoming the person that can write good-looking websites and performant apps. The journey continues as I intend to be the best I can… </p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Web Scraper</h4>
                                <div className="text-center period">July 2016 - September 2016</div>
                                <a href="http://www.rubrikkgroup.com/"><span className="glyphicon glyphicon-map-marker"></span>
                                Rubrikk.no, Cluj-Napoca</a>
                                <p className="description">
                                    <span className="glyphicon glyphicon-pencil"></span>
                                    Though it was a short experience, being a web scraper gave me the first contact with an IT company. I had the chance too see how a crawler works and I learned how to write Regular Expressions.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Procurement Analyst</h4>
                                <div className="text-center period">July 2014 - July 2016</div>
                                <a href="http://www.bombardier.com/en/home.html"><span className="glyphicon glyphicon-map-marker"></span>
                                Bombardier Transportation, Cluj-Napoca</a>
                                <p className="description">
                                    <span className="glyphicon glyphicon-pencil"></span>
                                    My first job gave me the opportunity to learn how to work within both small and big teams. I worked closely with people from France, Spain, England and Philippines. I also successfully managed a team of 6 people and was responsible for the trainings of the new joiners.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row education">
                        <div className="col-sm-12 col-xs-12">
                            <h3>Education</h3>
                        </div> 
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Master's degree</h4>
                                <div className="text-center period">2012 - 2014</div>
                                <p><span className="glyphicon glyphicon-certificate logo-small"></span>
                                    Major: Banks and Capital Markets</p>
                                <p><span className="glyphicon glyphicon-map-marker"></span>
                                    Faculty of Economics and Business Administration, Cluj-Napoca</p>
                                <p className="description"><span className="glyphicon glyphicon-pencil"></span>
                                    This master program offered me some insights of the capital market world and how the banking system works. My favorite course was stock market analysis where I have seen the power of mathematics and statistic in real life.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Bachelor's degree</h4>
                                <div className="text-center period">2009 - 2012</div>
                                <p><span className="glyphicon glyphicon-certificate logo-small"></span>
                                    Major: Finance and Banks</p>
                                <p><span className="glyphicon glyphicon-map-marker"></span>
                                    Faculty of Economics and Business Administration, Cluj-Napoca</p>
                                <p className="description"><span className="glyphicon glyphicon-pencil"></span>
                                    The education was economic related but I have done also statistical modeling which I enjoyed most. I learned also about the management of people and how to successfully run a business.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="box">
                                <h4 className="text-center">Highschool</h4>
                                <div className="text-center period">2005 - 2009</div>
                                <p><span className="glyphicon glyphicon-certificate logo-small"></span>
                                    Major: Mathematics and Informatics</p>
                                <p><span className="glyphicon glyphicon-map-marker"></span>
                                    National College “George Cosbuc”, Bistrita- Nasaud</p>
                                <p className="description"><span className="glyphicon glyphicon-pencil"></span>
                                    In high school I always was an A+ student (always was "the geek of the class"). I enjoyed very much studying mathematics and biology; won several competitions in this regard. In the first two years I studied informatics (basic C++).</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                            <button className="buttonCv text-center">
                                <a href={CV} download={CV} className="buttonCv">Download full resume</a>
                            </button>
                            <i className="fa fa-chevron-circle-up fa-3 arrow"
                            onClick= {()=> this.scrollToTop()}></i>
                        </div>
                    </div>
                    
                </div>
            </Element>
        )
    }
}







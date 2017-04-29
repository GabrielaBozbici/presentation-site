import React, {Component} from 'react';
import CV from "../assets/cv.pdf";

export default class Resume extends Component{
    render(){
        return(
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
                            <div className="text-center">September 2016 - present</div>
                            <p><span className="glyphicon glyphicon-map-marker"></span>
                            Self- taught</p>
                            <p className="description">
                                <span className="glyphicon glyphicon-pencil"></span>
                                My curiosity drove me to this path of learning fronend. I started shy with some online courses and got more and more interested in becoming the person that can write websites that look nice and apps that are fast and performant. The journey continues as I intend to be the best I can… </p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="box">
                            <h4 className="text-center">Web Scraper</h4>
                            <div className="text-center">July 2016 - September 2016</div>
                            <p><span className="glyphicon glyphicon-map-marker"></span>
                            Rubrikk.no, Cluj-Napoca</p>
                            <p className="description">
                                <span className="glyphicon glyphicon-pencil"></span>
                                Though it was a short experience, being a web scraper gave me the first contact with an IT company. I had the chance too see how a crawler works and I learned how to write Regular Expressions.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="box">
                            <h4 className="text-center">Procurement Analyst</h4>
                            <div className="text-center">September 2016 - July 2016</div>
                            <p><span className="glyphicon glyphicon-map-marker"></span>
                            Bombardier Transportation, Cluj-Napoca</p>
                            <p className="description">
                                <span className="glyphicon glyphicon-pencil"></span>
                                My first job gave me the opportunity to learn how to work within both small and big teams. I worked closely with people from France, Spain, England and Philippines. I also successfully managed a team of 6 people and was responsible for some trainings for the new joiners..</p>
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
                            <div className="text-center">2012 - 2014</div>
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
                            <div className="text-center">2009 - 2012</div>
                            <p><span className="glyphicon glyphicon-certificate logo-small"></span>
                                Major: Finance and Banks</p>
                            <p><span className="glyphicon glyphicon-map-marker"></span>
                                Faculty of Economics and Business Administration, Cluj-Napoca</p>
                            <p className="description"><span className="glyphicon glyphicon-pencil"></span>
                                The education was economic related but I have done also statistical modeling which I enjoyed most .I learned also about the management of people and how to successfully run a business.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="box">
                            <h4 className="text-center">Highschool</h4>
                            <div className="text-center">2005 - 2009</div>
                            <p><span className="glyphicon glyphicon-certificate logo-small"></span>
                                Major: Mathematics and Informatics</p>
                            <p><span className="glyphicon glyphicon-map-marker"></span>
                                National College “George Cosbuc”, Bistrita- Nasaud</p>
                            <p className="description"><span className="glyphicon glyphicon-pencil"></span>
                                In high school I always was an A+ student. I liked vrey much mathematics because it gave me the opportunity to search for multiple ways to solve a problem. The functionality of the human body always amazed me, that is why I enjoyed very much studying biology, especially anaotmy. I also liked very much learning informatics (mainely basic C++) because I liked how algorithms run, leaving for me to see only the reuslt.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <button className="buttonCv text-center">
                            <a href={CV} download={CV} className="buttonCv">Download full resume</a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}







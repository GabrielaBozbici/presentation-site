import React, {Component} from 'react';
import Photo from '../assets/photo.jpg'
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

export default class Profile extends Component{
    render(){
        return(
            <Element name="PROFILE" className="PROFILE">
                <div className="container"> 
                    <div className="about text-center">
                        <h2 className="about text-center">About</h2>
                    </div>
                    <div className="row">
                    <div className="col-sm-4 col-md-4 col-xs-8 col-xs-offset-2 col-sm-offset-0 details">
                        <h3>Details</h3>
                        <ul className="list-unstyled">
                            <li>
                                <span className="detail">Name: </span> Gabriela Bozbici
                            </li>
                            <li>
                                <span className="detail">Age:</span>27 years 
                            </li>
                            <li>
                                <span className="detail">Nationality:</span>Romanian 
                            </li>
                            <li>
                                <span className="detail">Location:</span>Prague (Czech Republic)
                            </li>
                            <li>
                                <span className="detail">Profession:</span>Frontend Developer
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xs-6 col-xs-offset-3 col-sm-offset-0 photo">
                        <img src={Photo} alt=""/>
                    </div>
                    <div className="col-sm-5 col-md-5 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                        <h3>Me</h3>
                        <span>
                            My frontend developer story began with the curiosity for how websites are made. After getting aquainted with HTML and CSS, I wanted my work to have functionality, so my attention went to web applications. So I begun learning JavaScript.
                            <br/>Other than that, I enjoy sunny, warm places, especially seaside combined with a good food that wakens my tastebuds. I can get very passionate when it comes to music and dance (especially latino rithms).
                        </span>
                    </div>
                    </div>
                </div>
            </Element>
        )
    }
}
import React, {Component} from 'react';
import Photo from '../assets/photo.jpg'
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

let age = new Date().getFullYear() - 1990;

export default class Profile extends Component{

    render(){
        return(
            <Element name="PROFILE" className="PROFILE">
                <div className="container"> 
                    <div className="about text-center">
                        <h2 className="about text-center">Profile</h2>
                    </div>
                    <div className="row">
                    <div className="col-sm-4 col-md-4 col-xs-8 col-xs-offset-2 col-sm-offset-0 details">
                        <h3>Details</h3>
                        <ul className="list-unstyled">
                            <li>
                                <span className="detail">Name: </span> Gabriela Bozbici
                            </li>
                            <li>
                                <span className="detail">Age:</span>Happy millennial ({age}y)
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
                        <h3>About me</h3>
                        <span>
                            My frontend developer story began with the curiosity for how websites are made. After getting acquainted with HTML and CSS, I wanted my work to have functionality, so my attention went to web applications, therefore I began learning JavaScript.
                            <br/>Other than that, I enjoy travelling to sunny places, especially seaside where good food  awakens my taste buds. I can get very passionate when it comes to music and dance (in particular latino rhythm). 
                        </span>
                    </div>
                    </div>
                </div>
            </Element>
        )
    }
}
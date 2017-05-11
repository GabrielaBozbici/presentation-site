import React, {Component} from 'react';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

export default class Footer extends Component {
    render(){
        return(
            <Element name="CONTACT" className="CONTACT">
                <div className="Footer">
                    <div className="wrap">
                        <h4 className="text-center">Contact me</h4>
                    <ul className="contactDetails text-center">
                        <li>
                            <a href="mailto:gabriela@bozbici.com">
                                <i className="fa fa-envelope"><p>gabriela@bozbici.com</p></i>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+40770364030">
                                <i className="fa fa-phone"><p>+40770364030</p></i>
                            </a>
                        </li>
                        <li>
                            <a href="skype:gabriela.bozbici?chat">
                                <i className="fa fa-skype"><p>gabriela.bozbici</p></i>
                            </a>
                        </li>
                    </ul>
                    <h4 className="text-center social">Social media</h4>
                    <ul className="socialMedia text-center">
                        <li>
                            <a target="_blank" href="https:www.linkedin.com/in/gabriela-bozbici-65637093/">
                                <i className="fa fa-linkedin"><p>LinkedIn</p></i>
                            </a>
                        </li>
                        <li>
                            <a href="https:github.com/gabrielabozbici" target="_blank">
                                <i className="fa fa-github">
                                    <p>GitHub</p>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="https:www.facebook.com/Gabriela.Bozbici" target="_blank">
                                <i className="fa fa-facebook">
                                    <p>Facebook</p>
                                </i>
                            </a>
                        </li>
                    </ul>
                    </div>
                    <div className="bottom-side">
                        <p className="text-center">
                            &copy; Copyright {new Date().getFullYear()} Gabriela Bozbici
                        </p>
                    </div>
                </div>
            </Element>
        )
    }
}
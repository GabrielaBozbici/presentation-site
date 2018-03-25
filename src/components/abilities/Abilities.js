import React, {Component} from 'react';
import Scroll from 'react-scroll';
import Abillity from './Ability';

import LogoBootstrap from '../../assets/bootstrap.png';
import LogoLess from '../../assets/less.png';
import LogoHtml from '../../assets/html5.png';
import LogojavaScript from '../../assets/javaScript.png';
import LogoGit from '../../assets/git.png';
import LogoCss from '../../assets/css3.svg';
import LogoReact from '../../assets/react.png';
import LogoRedux from '../../assets/redux.png';
import LogoJest from '../../assets/jest.png';
import LogoNpm from '../../assets/npm.png';
import LogoJenkins from '../../assets/jenkins.png';
import Logoiterm from '../../assets/iterm.png';



var Element = Scroll.Element;


export default class Abilities extends Component {
    render(){
        return(
            <Element name="Abilities" className="Abilities">
                <div className="abilities" name='Abilities'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col">
                                <h2 className="text-center">Abilities</h2>
                            </div>
                            <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-center">
                                <h3>Developer Skills</h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'HTML5 & CSS3'} starsCount={5} />
                                    <Abillity title={'Bootstrap framework'} starsCount={3} />
                                    <Abillity title={'LESS'} starsCount={3} />
                                    <Abillity title={'Version Control'} starsCount={4} />
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                            
                                    <Abillity title={'JavaScript'} starsCount={4} />
                                    <Abillity title={'React & Redux'} starsCount={4} />
                                    <Abillity title={'Jest- JavaScript Testing'} starsCount={3} />
                                    <Abillity title={'Responsive Web Design'} starsCount={4} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="img container banner">
                        <div className="row">
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                                    <img src={LogoHtml} alt="HTML logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">
                                    <img className="CssIcon" src={LogoCss} alt="CSS logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://www.javascript.com/" target="_blank">
                                    <img src={LogojavaScript} alt="JavaScript logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://reactjs.org/" target="_blank">
                                    <img src={LogoReact} alt="React logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://redux.js.org/" target="_blank">
                                    <img src={LogoRedux} alt="Redux logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://facebook.github.io/jest/" target="_blank">
                                    <img src={LogoJest} alt="Jest logo"/>
                                </a>
                            </li>
                        </div>
                   </div>
                      
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-center">
                                <h3>Tools</h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'WebStorm IDE'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'IntelliJ IDEA'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'Visual Studio Code'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'Atom'} starsCount={4} iconType={"heart"} />
                                    <Abillity title={'Sublime Text'} starsCount={4} iconType={"heart"} />
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'Mac OS'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'Chrome'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'Safari'} starsCount={5} iconType={"heart"} />
                                    <Abillity title={'Windows'} starsCount={3}  iconType={"heart"}/>
                                    <Abillity title={'Microsoft Office Suite'} starsCount={4} iconType={"heart"} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="img container banner">
                        <div className="row">
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://www.npmjs.com/" target="_blank">
                                    <img src={LogoNpm} alt="Npm logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://jenkins.io/" target="_blank">
                                    <img className="JenkinsIcon" src={LogoJenkins} alt="Jenkins logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://getbootstrap.com/" target="_blank">
                                    <img className="Bootstrapicon" src={LogoBootstrap} alt="Bootstrap logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://git-scm.com/" target="_blank">
                                    <img src={LogoGit} alt="Git logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="https://www.codecademy.com/articles/command-line-commands" target="_blank">
                                    <img src={Logoiterm} alt="iTerm logo"/>
                                </a>
                            </li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo">
                                <a href="http://lesscss.org/" target="_blank">
                                    <img src={LogoLess} alt="Less logo"/>
                                </a>
                            </li>
                        </div>
                    </div>
                                           
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-center">
                                <h3>Languages</h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'Romanian (Native)'} starsCount={5} />
                                    <Abillity title={'English (Advanced)'} starsCount={5} />
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'Spanish (Medium)'} starsCount={4} />
                                    <Abillity title={'French (Medium)'} starsCount={3} />
                                </ul>
                            </div>
                            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
                                <ul className="list-unstyled">
                                     <Abillity title={'Italian (Begginer)'} starsCount={2} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        )
    }
}
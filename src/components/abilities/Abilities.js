import React, {Component} from 'react';
import Scroll from 'react-scroll';
import Photo1 from '../../assets/key.jpg';
import Photo2 from '../../assets/hand.jpg';
import Abillity from './Ability';

import LogoBootstrap from '../../assets/bootstrap.png';
import LogoLess from '../../assets/less.png';
import LogoHtml from '../../assets/html5.png';
import LogoGit from '../../assets/git.png';
import LogoCss from '../../assets/css3.svg';
import LogoReact from '../../assets/react.png';


var Element = Scroll.Element;


export default class Abilities extends Component {
    render(){
        return(
            <Element name="ABILITIES" className="ABILITIES">
                <div className="abilities" name='ABILITIES'>
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
                                    <Abillity title={'HTML5'} starsCount={4} />
                                    <Abillity title={'CSS3'} starsCount={4} />
                                    <Abillity title={'Bootstrap framework'} starsCount={3} />
                                    <Abillity title={'LESS'} starsCount={3} />
                                    <Abillity title={'Version Control'} starsCount={4} />
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                            
                                    <Abillity title={'JavaScript'} starsCount={4} />
                                    <Abillity title={'React JS'} starsCount={4} />
                                    <Abillity title={'Flux'} starsCount={3} />
                                    <Abillity title={'JQuery'} starsCount={4} />
                                    <Abillity title={'Responsive Web Design'} starsCount={4} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="img container banner">
                        <div className="row">
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center  logo"><img className="Bootstrapicon" src={LogoBootstrap} alt=""/></li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center  logo"><img src={LogoGit} alt=""/></li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center logo"><img src={LogoLess} alt=""/></li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center  logo"><img src={LogoReact} alt=""/></li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center  logo"><img src={LogoHtml} alt=""/></li>
                            <li className="col-sm-2 col-xs-4 col-xs-offset-2 col-sm-offset-0 text-center  logo"><img className="CssIcon" src={LogoCss} alt=""/></li>
                            
                        </div>
                   </div>
                      
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-center">
                                <h3>Tools</h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'Mac OS'} starsCount={5} />
                                    <Abillity title={'Atom'} starsCount={4} />
                                    <Abillity title={'Visual Studio Code'} starsCount={4} />
                                    <Abillity title={'Sublime Text'} starsCount={4} />
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                                <ul className="list-unstyled">
                                    <Abillity title={'Chrome'} starsCount={5} />
                                    <Abillity title={'Chrome DevTools'} starsCount={4} />
                                    <Abillity title={'Windows'} starsCount={5} />
                                    <Abillity title={'Microsoft Office Suite'} starsCount={4} />
                                </ul>
                            </div>
                        </div>
                    </div>
   
                   {/*<div className="img banner">
                     <img src={Photo2} alt="baner"/>
                   </div>*/}
                                           
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
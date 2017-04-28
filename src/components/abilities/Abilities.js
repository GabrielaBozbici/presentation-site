import React, {Component} from 'react';
import Abillity from './Ability';

export default class Abilities extends Component {
    render(){
        return(
            <div className="abilities">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col">
                            <h2 className="text-center">Abilities</h2>
                        </div>
                        <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0">
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
                                <Abillity title={'Flux'} starsCount={4} />
                                <Abillity title={'JQuery'} starsCount={4} />
                                <Abillity title={'Object oriented programming'} starsCount={4} />
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <h3>Tools</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <ul className="list-unstyled">
                                <Abillity title={'Mac OS'} starsCount={4} />
                                <Abillity title={'Atom'} starsCount={4} />
                                <Abillity title={'Visual Studio Code'} starsCount={4} />
                                <Abillity title={'Sublime Text'} starsCount={4} />
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <ul className="list-unstyled">
                                <Abillity title={'Chrome'} starsCount={5} />
                                <Abillity title={'Chrome DevTools'} starsCount={4} />
                                <Abillity title={'Windows'} starsCount={4} />
                                <Abillity title={'Microsoft Office Suite'} starsCount={4} />
                                
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <h3>Languages</h3>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <ul className="list-unstyled">
                                <Abillity title={'Romanian (Native)'} starsCount={5} />
                                <Abillity title={'English (Advanced)'} starsCount={5} />
                                <Abillity title={'Spanish (Medium)'} starsCount={4} />
                               
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-sm-offset-0">
                            <ul className="list-unstyled">
                                <Abillity title={'French (Medium)'} starsCount={3} />
                                <Abillity title={'Italian (Begginer)'} starsCount={2} />
                                <Abillity title={'Dance (Latino)'} starsCount={4} />
                          
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
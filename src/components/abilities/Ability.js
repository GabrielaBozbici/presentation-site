import React, {Component} from 'react';
import Stars from './Stars';

export default class Ability extends Component {
    render(){
        return(
            <li>
                <span className="title">{this.props.title}</span>
                <Stars count={this.props.starsCount} />
                <div className="clear"></div>
            </li>
        )}
}
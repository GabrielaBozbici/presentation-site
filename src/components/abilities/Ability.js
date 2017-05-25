import React, {Component} from 'react';
import Stars from './Stars';

export default class Ability extends Component {
    render(){
        return(
            <li className="ability">
                <span className="title">{this.props.title}</span>
                <Stars count={this.props.starsCount} iconType={this.props.iconType}/>
                <div className="clear"></div>
            </li>
        )}
}
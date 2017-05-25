import React, {Component} from 'react';

export default class Stars extends Component{
    componentWillMount(){
        let emptyStars = [];
        let filledStars = [];

        for(let i = 1; i <= this.props.count; i++){
            filledStars.push(i)
        }
        if(this.props.count < 5){
            for(let j = 5 - this.props.count; j > 0; j--){
                emptyStars.push(j);
            }
        }
        this.setState({
            filled: filledStars,
            empty: emptyStars,
            iconType: this.props.iconType || 'star',
        });
    }

    render(){
        return(
            <span className="score">
                {this.state.filled.map((star) => <span key={star} className={`glyphicon glyphicon-${this.state.iconType} filled`}></span>)}
                {this.state.empty.map((star) => <span key={star} className={`glyphicon glyphicon-${this.state.iconType} empty`}></span>)}
            </span>
        )
    }
}
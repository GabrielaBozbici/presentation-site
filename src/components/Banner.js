import React, {Component} from 'react';
import Photo2 from '../assets/apple.png';

export default class Banner extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="img">
                    <img src={Photo2} alt="baner"/>
                </div>
                <div className="container brand">
                    <h1>Gabriela Bozbici</h1>
                    <span>Frontend developer with passion for beauty</span>
                </div>
                
            </div>
        )
    }
}


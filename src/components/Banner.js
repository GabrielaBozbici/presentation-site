import React, {Component} from 'react';
import Photo from '../assets/bannerM.jpg'


export default class Banner extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="img">
                    <img src={Photo} alt="baner"/>
                </div>
                <div className="container brand">
                    <h1>Gabriela Bozbici</h1>
                    <span>Frontend developer with passion for beauty</span>
                </div>
                
            </div>
        )
    }
}


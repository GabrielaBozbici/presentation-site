import React, {Component} from 'react';
import Photo from '../assets/bannerM.jpg';
import Photo2 from '../assets/apple.png';
import Photo3 from '../assets/a1.png';

//import Photo4 from '../assets/a2.png';
 import Photo5 from '../assets/a3.png';
 import Photo6 from '../assets/a4.png';
import Photo7 from '../assets/a5.png';

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


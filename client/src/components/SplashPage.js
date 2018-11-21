import React, { Component } from 'react';
import '../styles.css'
import { Link } from 'react-router-dom'


class SplashPage extends Component {
    render() {
        return (
            <div className="BigContainer">


            <div className="PictureContainer">
            <img src="http://kikie.k.i.pic.centerblog.net/o/d0f7543f.png" className="CircleBorder" alt=""/>

                <img src="https://static.thenounproject.com/png/27084-200.png" className="SplashPageEyeImage" alt="" />
            </div>
                <h1 className="Welcome">Welcome Back Guildmaster!</h1>

            <Link to="/quests">
            <h2>
                Enter
            </h2>
            </Link>


            </div>
        );
    }
}

export default SplashPage;
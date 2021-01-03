import React, { Component } from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.jpg';

const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 cover" options={{ max: 50 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner fill cover"> </div>
                {/* <img className="w-100" alt='Logo' src={logo}/> */}
            </Tilt>
        </div>

    )
}
export default Logo;
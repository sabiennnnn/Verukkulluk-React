import React, { Component } from 'react';
import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'

export default class Header extends Component {

    render() {
        return(
            <header className="hero-foto">
                <nav>
                    <img src={logo} alt="Logo"></img>
                </nav>

            </header>

        )
    }
}
import React, { Component } from 'react';
import loginAfb from '../assets/img/verrukkulluk-login.png'

import '../assets/css/login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: this.props.data ? this.props.data : false,
        }
    }

    componentDidMount() {
        // Eventueel API call
        this.setState({
            isLoaded: true
        })
    }

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <div className="login">
                    <img src={loginAfb} alt="Log-in" className="login-img"></img>

                    <div className="box">

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                            type="text"
                            name="email"
                            className="login-input"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="wachtwoord">Wachtwoord</label>
                            <input
                            type="password"
                            name="wachtwoord"
                            className="login-input"/>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                       >Login</button>
                </div>
            )
        }
    }
    

    render() {
        return(
            <React.Fragment>
                { this.renderContent() }
            </React.Fragment>
        )
    }


}

export default Login;
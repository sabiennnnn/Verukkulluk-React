import React, { Component } from 'react';

import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default class Header extends Component {

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

    showSettings (event) {
        event.preventDefault();
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                
                <Container fluid>
                    <Row>
                        <Col xs="12" md="12">
                        <header className="hero-foto">
                            <nav className="flext-st">
                                <Link to="/"><img src={logo} alt="Logo"></img></Link>
                                <Menu right width={ '340px' } disableAutoFocus>
                                    <a id="home" className='menu-item' href="/"> Home </a>
                                    <a id="recept" className='menu-item' href="/recept"> Recept </a>
                                    <a id="favorieten" className='menu-item' href="/"> Mijn favorieten </a>
                                    <a id="boodschappen" className='menu-item' href="/"> Boodschappenlijst </a>
                                </Menu>
                            </nav>
                        </header>
                        </Col>
                    </Row>
                </Container>
                
                
                
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }
}
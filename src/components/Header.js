import React, { Component } from 'react';

import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import Searchbar from './SearchBar';
import SearchBar from './SearchBar';

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
                    <Row className="horizFix">
                        <Col xs="12" md="12">
                        <header className="hero-foto">
                            <nav className="flex">
                                <Link to="/"><img src={logo} alt="Logo"></img></Link>
                                <div className="wrap-search flex">
                                    <SearchBar></SearchBar>
                                    <div className="wrap-menu flex">   
                                        <Menu right width={ '340px' } disableAutoFocus>
                                            <a id="home" className='menu-item' href="/"> Home </a>
                                            <a id="recept" className='menu-item' href="/recept/1"> Recept </a>
                                            <a id="favorieten" className='menu-item' href="/"> Mijn favorieten </a>
                                            <a id="boodschappen" className='menu-item' href="/"> Boodschappenlijst </a>
                                        </Menu>
                                    </div>
                                </div>
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
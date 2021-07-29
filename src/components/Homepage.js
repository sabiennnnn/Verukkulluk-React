import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/css/main.css';
import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'

import Footer from './Footer';
import Agenda from './Agenda';
import Login from './Login';
import ReceptKaart from './ReceptKaart';
import HeaderHome from './HeaderHome';


class Homepage extends Component {

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

    renderHeader() {
        return(
            <HeaderHome></HeaderHome>
        )
    }

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <Container>
                    <Row className="mt-5">
                        <Col xs="12" md="4" className="p-4">
                        <Row>
                            <Col xs="12" md="12" >
                            <Agenda></Agenda>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="12" className="mt-5"><Login></Login></Col>
                        </Row>
                        </Col>
            
                        <Col xs="12" md="8" className="p-4">
                        <Row>
                            <Col xs="12" md="12" >
                                <ReceptKaart></ReceptKaart>
                            </Col>
                        </Row>
                        
                        </Col>
                    </Row>
                </Container>
            )
        }
    }


    renderFooter() {
        return(
            <Footer></Footer>
        )
    }

    render() {
        return(
            <React.Fragment>
                { this.renderHeader() }
                { this.renderContent() }
                { this.renderFooter() }
            </React.Fragment>
        )
    }


}

export default Homepage;
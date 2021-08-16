import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/css/main.css';
import '../assets/css/header.css'

import Footer from './Footer';
import Agenda from './Agenda';
import Login from './Login';
import ReceptKaart from './ReceptKaart';
import Header from './Header';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipes: this.props.recipes
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
            <Header></Header>
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
                            <Col xs="12" md="12" className="mt-5 p-4"><Login></Login></Col>
                        </Row>
                        </Col>
            
                        <Col xs="12" md="8" className="p-4">
                                <ReceptKaart recipes={this.state.recipes}></ReceptKaart>
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
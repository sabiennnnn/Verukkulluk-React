import React, { Component } from 'react';
import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'
import { Container, Row, Col } from 'reactstrap';

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

    renderContent() {
        if (this.state.isLoaded) {
            return (
                
                <Container fluid>
                    <Row>
                        <Col xs="12" md="12">
                        <header className="hero-foto">
                            <nav>
                                <img src={logo} alt="Logo"></img>
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
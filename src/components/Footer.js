import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import payOff from '../assets/img/verrukkulluk-pay-off.png'

export default class Footer extends Component {

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

    renderFooter() {
        if (this.state.isLoaded) {
            return (
                <Container fluid>
                    <Row>
                        <Col xs="12" md="12" className="mt-5" style={{backgroundColor: 'orange', height: '200px'}}>
                            <div className="containter-footer" >
                                <img src={payOff} alt="pay-off"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    render() {
        return (

            <React.Fragment>
                { this.renderFooter() }
            </React.Fragment>
        )
    }
}
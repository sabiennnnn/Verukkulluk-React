import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/css/footer.css'
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
                    <Row className="horizFix">
                        <Col xs="12" md="12" className="mt-md-5" style={{backgroundColor: 'orange'}}>
                            <div className="container-footer flex-st" >
                                <img src={payOff} className="footer-img" alt="pay-off"/>
                                <div className="footer-details">
                                    <h2>Contact</h2>
                                    <p>Verrukkulluk <br/> Poststraat 2b <br/> Sittard  <br/> info@verrukkulluk.nl</p>
                                </div>
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
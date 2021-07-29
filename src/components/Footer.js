import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
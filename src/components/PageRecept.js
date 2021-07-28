import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/css/main.css';

import Recept from '../components/Recept';
import Agenda from '../components/Agenda';
import Header from '../components/Header';
import Login from '../components/Login';
import Info from '../components/Info';

class PageRecept extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            stateData: this.props.data,
        }
        console.log("PageRecept: "+ this.props.data)
    }

    componentDidMount() {
        // Eventueel API call
        this.setState({
            isLoaded: true
        })
    }

    renderHeader() {
            return(

                <Container fluid>
                    <Row>
                        <Col xs="12" md="12">
                            <Header></Header>
                        </Col>
                    </Row>
                </Container>

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
                            <Recept data={this.state.stateData}></Recept>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="12" className="mt-5"><Info data={this.state.stateData}></Info></Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>

            )
        }
    }

    renderFooter() {
        return(

            <Container fluid>
                <Row>
                    <Col xs="12" md="12" className="mt-5" style={{backgroundColor: 'orange', height: '200px'}}>
                     </Col>
                </Row>
            </Container>

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

export default PageRecept;
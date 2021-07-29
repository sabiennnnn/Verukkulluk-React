import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'
import { Container, Row, Col } from 'reactstrap';


export default class HeaderHome extends Component {

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

    // Krijg nav > logo niet over carousel heen

    renderContent() {
        if (this.state.isLoaded) {
            return (
                
                <Container fluid>
                    <Row>
                        <Col xs="12" md="12" className="col-carousel">
                            <Carousel showThumbs={false} dynamicHeight={false} className="carousel">
                                <div>
                                    <img src={"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80"}/>
                                </div>

                                <div>
                                    <img src={"https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}/>
                                </div>

                                <div>
                                    <img src={"https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}/>
                                </div>
                            </Carousel>
                            
                        </Col>
                    </Row>

                    <nav className="nav-header">
                        <img src={logo} alt="Logo"></img>
                     </nav>
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
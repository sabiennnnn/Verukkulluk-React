import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';

import '../assets/css/main.css';

import Recept from '../components/Recept';
import Agenda from '../components/Agenda';
import Header from '../components/Header';
import Login from '../components/Login';
import Info from '../components/Info';
import Footer from '../components/Footer';

class PageRecept extends Component {


    constructor(props) {
        super(props);
        const id = parseInt(this.props.match.params.id);
        this.state = {
            isLoaded: false,
            recipe: this.props.recipes.find(recipe => recipe.id === id),
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
                            <Col xs="12" md="12" className="mt-5"><Login></Login></Col>
                        </Row>
                        </Col>
            
                        <Col xs="12" md="8" className="p-4">
                        <Row>
                            <Col xs="12" md="12" >
                            <Recept recipe={this.state.recipe}></Recept>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="12" className="mt-5"><Info recipe={this.state.recipe}></Info></Col>
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

export default withRouter(PageRecept);
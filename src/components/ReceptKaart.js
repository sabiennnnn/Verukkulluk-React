import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/main.css'
import '../assets/css/receptkaart.css'
import DetailsTopIcons from './DetailsTopIcons';

class ReceptKaart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: this.props.data ? this.props.data : false,

            dataKaart: {
                titel: "Eggs & Veggies",
                afb: "https://images.unsplash.com/photo-1518310532637-f5225f94f3c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                omschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

            }
        }
    }

    componentDidMount() {
        // Eventueel API call
        this.setState({
            isLoaded: true
        })
    }

    // Hoe maar 4 receptkaarten laten zien ipv allemaal in de array?

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <Row>
                    <Col xs="12" md="6" >
                        <div className="recept-card">
                            <img src={ this.state.dataKaart.afb } style={{width: "100%"}}></img>
                            <div className="info-s flex">
                                <h2>{ this.state.dataKaart.titel }</h2>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                    <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                    <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                    <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                    <FontAwesomeIcon icon={faStar} color="beige"/>
                                </div>
                            </div>
                            <p className="info-r">{ this.state.dataKaart.omschrijving }</p>
                            <div className=" info-p flex">
                                <button>Smullen!</button>
                                <DetailsTopIcons></DetailsTopIcons>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            )
        }
    }

    render() {
        return(
            <React.Fragment>
                { this.renderContent() }
            </React.Fragment>
        )
    }



}

export default ReceptKaart;
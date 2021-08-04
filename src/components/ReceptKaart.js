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
            homeData: this.props.data  
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }


    renderContent() {
        if(this.state.isLoaded) {
            console.log("receptkaart: " + this.state.homeData)
            return(
                <Row>
                    {this.state.homeData.map((kaart, id) => {
                        return(
                            <Col xs="12" md="6" key={id}>
                                <div className="recept-card">
                                    <img src={ kaart.imageUrl } style={{width: "100%"}}></img>
                                    <div className="info-s flex">
                                        <h2>{ kaart.title }</h2>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                            <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                            <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                            <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                            <FontAwesomeIcon icon={faStar} color="beige"/>
                                        </div>
                                    </div>
                                    <p className="info-r">{ kaart.description }</p>
                                    <div className=" info-p flex">
                                        <button>Smullen!</button>
                                        <DetailsTopIcons></DetailsTopIcons>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
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
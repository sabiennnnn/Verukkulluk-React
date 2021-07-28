import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import DetailsTopIcons from './DetailsTopIcons';

export default class Recept extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            aData: this.props.data
        }
        // console.log("Recept.js: " + this.props.data)
    }

    componentDidMount() {
            this.setState({
                isLoaded: true
            })
    }

    renderContent() {
        if(this.state.isLoaded) {

            return(
                <React.Fragment>
                <div className="recept-kaart">
                    <div className="recept-foto"></div>
                        
                    <div  className="recept-details">
                         <div className="recept-info"> 
                            <DetailsTopIcons></DetailsTopIcons>
                        </div> 
                        
                        <section className="titelBe flex">
                            
                            <h1>{this.state.aData.title}</h1>
                            
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="beige"/>
                            </div>
                        </section>

                        <section className="keuken flex">
                            <h4>Keuken</h4>
                            <p>{this.state.aData.kitchen.description}</p>
                          
                            
                            <h4>Type</h4>
                            <p>{this.state.aData.recipeType.description}</p>
                            
                        </section>
                    
                        <section className="beschrijving" >{this.state.aData.description}</section>
            
                        <div>
                            <button>Op Lijst</button>
                            <i></i>
                        </div>

                    </div>
                </div>

            </React.Fragment>
            )
        }
    }

    render() { 

        return (
            <React.Fragment> 
                { this.renderContent() }
            </React.Fragment>
        )

    }
}
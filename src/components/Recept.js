import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import DetailsTopIcons from './DetailsTopIcons';

export default class Recept extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            aData: this.props.data,
            ImageRecept: this.props.data.imageUrl
        }
         console.log("Recept.js: " + this.props.data)
         console.log("ImageRecept: " + this.state.ImageRecept)
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
                    <div className="recept-foto" style= {{backgroundImage: `url(${this.state.ImageRecept})`}} ></div>
                        
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
                            <h4>Keuken</h4><p>{this.state.aData.kitchen.description}</p>
                            <h4>Type</h4><p>{this.state.aData.recipeType.description}</p>
                        </section>
                    
                        <section className="beschrijving" >{this.state.aData.description}</section>
            
                        <div className="recept-bottom flex">
                            <button>Op Lijst</button>
                            <FontAwesomeIcon icon={faHeart} color="var(--darker-red)" size='2x'/>
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
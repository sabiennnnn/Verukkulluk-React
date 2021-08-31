import React, { Component } from 'react';
import { Col } from 'reactstrap';

import ReactStars from 'react-rating-stars-component';

import '../assets/css/main.css'
import '../assets/css/receptkaart.css'
import DetailsTopIcons from './DetailsTopIcons';
import { Link } from 'react-router-dom';

class ReceptKaart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipe: this.props.recipe
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    calculateStars(recipes) {

        const totalStars = recipes.ratings.reduce(function (sum, curr) {
            return sum + curr.amount / recipes.ratings.length;
        }, 0);

        return totalStars;
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                    <Col xs="12" md="6" key={this.state.recipe.id} >
                        <div className="recept-card">
                            <img src={this.state.recipe.imageUrl} alt="afbeelding recept"></img>
                            <div className="info-s flex">
                                <h2>{this.state.recipe.title}</h2>
                                <div className="stars">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        activeColor="GoldenRod"
                                        color="beige"
                                        value={this.calculateStars(this.state.recipe)}
                                        isHalf={true}
                                        edit={false}
                                    />
                                </div>
                            </div>
                            <p className="info-r" >{this.state.recipe.description}</p>
                            <div className=" info-p flex">
                                <Link to={`/recept/${this.state.recipe.id}`}><button>Smullen!</button></Link>
                                <DetailsTopIcons recipe={this.state.recipe}></DetailsTopIcons>
                            </div>
                        </div>
                    </Col>
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

export default ReceptKaart;
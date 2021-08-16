import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

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
            recipes: this.props.recipes
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
                <Row>
                    {this.state.recipes.map((recipe, id) => {
                        return (
                            <Col xs="12" md="6" key={id}>
                                <div className="recept-card">
                                    <img src={recipe.imageUrl} style={{ width: "100%" }} alt="afbeelding recept"></img>
                                    <div className="info-s flex">
                                        <h2>{recipe.title}</h2>
                                        <div className="stars">
                                            <ReactStars
                                                count={5}
                                                size={20}
                                                activeColor="GoldenRod"
                                                color="beige"
                                                value={this.calculateStars(recipe)}
                                                isHalf={true}
                                                edit={false}
                                            />
                                        </div>
                                    </div>
                                    <p className="info-r">{recipe.description}</p>
                                    <div className=" info-p flex">
                                        <Link to={`/recept/${recipe.id}`}><button>Smullen!</button></Link>
                                        <DetailsTopIcons recipe={recipe}></DetailsTopIcons>
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
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        )
    }



}

export default ReceptKaart;
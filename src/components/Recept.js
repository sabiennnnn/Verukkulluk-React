import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import DetailsTopIcons from './DetailsTopIcons';

export default class Recept extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipe: this.props.recipe,
            ImageRecept: this.props.recipe.imageUrl
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    calculateStars(recipe) {
       
        const totalStars = recipe.ratings.reduce(function (sum, curr) { 
            return sum + curr.amount / recipe.ratings.length;} ,0);

            return totalStars;
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                <React.Fragment>
                    <div className="recept-kaart">
                        <div className="recept-foto" style={{ backgroundImage: `url(${this.state.ImageRecept})` }} ></div>

                        <div className="recept-details">
                            <div className="recept-info">
                                <DetailsTopIcons recipe={this.state.recipe}></DetailsTopIcons>
                            </div>

                            <section className="titelBe flex">
                                <h1>{this.state.recipe.title}</h1>
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
                            </section>

                            <section className="keuken flex">
                                <h4>Keuken</h4><p>{this.state.recipe.kitchen.description}</p>
                                <h4>Type</h4><p>{this.state.recipe.recipeType.description}</p>
                            </section>

                            <section className="beschrijving" >{this.state.recipe.description}</section>

                            <div className="recept-bottom flex">
                                <button>Op Lijst</button>
                                <FontAwesomeIcon icon={faHeart} color="var(--darker-red)" size='2x' />
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
                {this.renderContent()}
            </React.Fragment>
        )

    }
}
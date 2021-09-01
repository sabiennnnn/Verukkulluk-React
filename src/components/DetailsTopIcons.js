import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

class DetailsTopIcons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipe: this.props.recipe ? this.props.recipe : false,
        }
    }

    componentDidMount() {
        // Eventueel API call
        this.setState({
            isLoaded: true
        })
    }

    calculatePrice(recipe) {
        let totalPrice = 0;

        for (let index = 0; index < recipe.ingredients.length; index++) {
            const ingredient = recipe.ingredients[index];
            totalPrice += ingredient.article.price;
        }

        return totalPrice / 100;
    }

    calculateCalories(recipe) {
        let totalCalories = 0;

        for (let index = 0; index < recipe.ingredients.length; index++) {
            const ingredient = recipe.ingredients[index];
            totalCalories += ingredient.article.calories;
        }

        return totalCalories;
    }

    renderContent() {
        if(this.state.isLoaded) {

            return(
            <ul className="info-list">
                <li><FontAwesomeIcon icon={faUserFriends} color="var(--darker-red)" /><p>4</p></li>
                <li><FontAwesomeIcon icon={faEuroSign} color="var(--darker-red)" /><p>{this.calculatePrice(this.state.recipe)}</p></li>
                <li><FontAwesomeIcon icon={faFire} color="var(--darker-red)" /><p>{this.calculateCalories(this.state.recipe)}</p></li>
            </ul>
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
export default DetailsTopIcons
import React, { Component } from 'react';
import '../assets/css/info.css';

class Bereidingswijze extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipe: this.props.recipe,
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                <ul>
                    {this.state.recipe.preparations.map((preparationStep) =>
                        <li key={preparationStep.id} className="ber-li ">
                            <div className="ber-div flex-st">
                                <h2 className="ber-step">{preparationStep.step}.</h2>
                                <p className="ber-descr">{preparationStep.description}.</p>
                            </div>

                        </li>
                    )}
                </ul>
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

export default Bereidingswijze;
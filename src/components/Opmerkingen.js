import React, { Component } from 'react';
import '../assets/css/info.css';

class Opmerkingen extends Component {

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
                <ul className="ul-opm">
                    {/* // avatar homer afb /avatar ipv /avatars //*/}
                    {this.state.recipe.remarks.map((remark) =>
                        <li key={remark.id} className="ber-li ">
                            <div className="ber-div flex-st">
                                <img className="opm-img" src={remark.user.avatar} alt="avatar" />
                                <div className="opm-user">
                                    <h2>{remark.user.name}</h2>
                                    <p>{remark.remark}.</p>
                                </div>
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

export default Opmerkingen;
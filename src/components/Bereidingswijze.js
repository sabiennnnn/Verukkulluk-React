import React, { Component } from 'react';
import '../assets/css/info.css';

class Bereidingswijze extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            stapData: this.props.data,
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <ul>
                
                    {this.state.stapData.map((item, index) => {
                        return (
                            <li key={index} className="ber-li ">

                                {item.preparations.map((option, index) =>
                                    <div className="ber-div flex-st">
                                        <h2 className="ber-step" key={index} >{option.step}.</h2>
                                        <p className="ber-descr" key={index} >{option.description}.</p>
                                    </div>
                                )}
                                
                            </li>
                    )})}
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

export default Bereidingswijze;
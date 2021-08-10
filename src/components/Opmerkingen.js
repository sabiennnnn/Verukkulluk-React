import React, { Component } from 'react';
import '../assets/css/info.css';

class Opmerkingen extends Component {

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
                     {/* // avatar homer afb /avatar ipv /avatars //*/}
                
                    {this.state.stapData.map((item, index) => {
                        return (
                            <li key={index} className="ber-li ">

                                {item.remarks.map((option, index) =>
                                    <div className="ber-div flex-st">
                                        <img className="opm-img" key={index} src={option.user.avatar}/>
                                        <div className="opm-user">
                                            <h2 key={index}>{option.user.name}</h2>
                                            <p key={index} >{option.remark}.</p>
                                        </div>
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

export default Opmerkingen;
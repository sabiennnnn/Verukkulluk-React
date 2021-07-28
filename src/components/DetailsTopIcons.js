import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

class DetailsTopIcons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: this.props.data ? this.props.data : false,
        }
    }

    componentDidMount() {
        // Eventueel API call
        this.setState({
            isLoaded: true
        })
    }

    renderContent() {
        if(this.state.isLoaded) {

            var dataa = {
                foto: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80",
                datumToegevoegd: "26-07-2021",
                prijs: 12,
                personen: 4,
                calorieen: 432
            }

            return(
            <ul className="info-list">
                <li><FontAwesomeIcon icon={faUserFriends} color="var(--darker-red)" /><p>4</p></li>
                <li><FontAwesomeIcon icon={faEuroSign} color="var(--darker-red)" /><p>{dataa.prijs}</p></li>
                <li><FontAwesomeIcon icon={faFire} color="var(--darker-red)" /><p>{dataa.calorieen}</p></li>
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
import React, { Component } from 'react';
import agendaH from '../assets/img/verrukkulluk-agenda.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/agenda.css'

export default class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: this.props.data ? this.props.data : false,
            dataAgenda: [
                {titel: "Vegetarisch koken",
                beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee"},
    
                {titel: "Uit de moestuin",
                beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee"},
    
                {titel: "Vegetarisch koken",
                beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee"},

                {titel: "Vegetarisch koken",
                beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee"}
            ]
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
        
            return(
                <div className="agenda">
                <img src={agendaH} alt="Agenda"></img>
                <ul>
                    {this.state.dataAgenda.map((item, index) => {
                    return <li key={index}>
                            <FontAwesomeIcon icon={faCalendarAlt} color="white" size='2x' className="icon-a"/>
                            <div className="omschr" >
                                <h2>{item.titel}</h2>
                                <p>{item.beschrijving}</p>
                            </div>
                           </li>
                    })}
                </ul>
                </div>
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
    

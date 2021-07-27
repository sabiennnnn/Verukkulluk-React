import React, { Component } from 'react';
import agendaH from '../assets/img/verrukkulluk-agenda.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default class Recept extends Component {

    render() {

        var dataAgenda = {
            titel: "Vegetarisch koken",
            beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee",
        }

        return(
            <div className="agenda">
                <img src={agendaH} alt="Agenda"></img>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} color="white" size='2x' className="icon-a"/>
                        <div className="omschr" >
                            <h2>{dataAgenda.titel}</h2>
                            <p>{dataAgenda.beschrijving}</p>
                        </div>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} color="white" size='2x' className="icon-a"/>
                        <div className="omschr" >
                            <h2>{dataAgenda.titel}</h2>
                            <p>{dataAgenda.beschrijving}</p>
                        </div>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} color="white" size='2x' className="icon-a"/>
                        <div className="omschr" >
                            <h2>{dataAgenda.titel}</h2>
                            <p>{dataAgenda.beschrijving}</p>
                        </div>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} color="white" size='2x' className="icon-a"/>
                        <div className="omschr" >
                            <h2>{dataAgenda.titel}</h2>
                            <p>{dataAgenda.beschrijving}</p>
                        </div>
                    </li>

                </ul>
            </div>
        )

    }
}

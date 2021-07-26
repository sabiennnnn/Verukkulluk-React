import React, { Component } from 'react';

export default class Recept extends Component {

    render() {

        var dataAgenda = {
            titel: "Vegetarisch koken",
            beschrijving: "Een workshop vegetarisch koken, onder leiding van Trientje Hupsakee",
        }

        return(
            <div className="agenda">
                <ul>
                    <li>
                        <img></img>
                        <h2>{dataAgenda.titel}</h2>
                        <p>{dataAgenda.beschrijving}</p>
                    </li>

                    <li>
                        <img></img>
                        <h2>{dataAgenda.titel}</h2>
                        <p>{dataAgenda.beschrijving}</p>
                    </li>

                    <li>
                        <img></img>
                        <h2>{dataAgenda.titel}</h2>
                        <p>{dataAgenda.beschrijving}</p>
                    </li>

                    

                </ul>
            </div>
        )

    }
}
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export default class Recept extends Component {

    render() {

        var data = {
            titel: "Vegan Burger",
            foto: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80",
            beschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            datumToegevoegd: "26-07-2021",
            prijs: 12,
            personen: 4,
            calorieen: 432,
            keuken: "Amerikaans",
            type: "Vegan"
        }

        return (


            <React.Fragment>
                <div className="recept-kaart">
                    <div className="recept-foto"></div>
                        

                    <div  className="recept-details">
                         <div className="recept-info"> 
                            <ul className="info-list">
                                <li><FontAwesomeIcon icon={faUserFriends} color="var(--darker-red)" /><p>{data.personen}</p></li>
                                <li><FontAwesomeIcon icon={faEuroSign} color="var(--darker-red)" /><p>{data.prijs}</p></li>
                                <li><FontAwesomeIcon icon={faFire} color="var(--darker-red)" /><p>{data.calorieen}</p></li>
                            </ul>
                        </div> 
                        
                        <section className="titelBe flex">
                            <h1>{data.titel}</h1>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="GoldenRod"/>
                                <FontAwesomeIcon icon={faStar} color="beige"/>
                            </div>
                        </section>

                        <section className="keuken flex">
                            <h4>Keuken</h4><p>{data.keuken}</p>
                            <h4>Type</h4><p>{data.type}</p>
                        </section>
                        
                        <section className="beschrijving" >{data.beschrijving}</section>

                        <div>
                            <button>Op Lijst</button>
                            <i></i>
                        </div>

                    </div>
                </div>

            </React.Fragment>

        )

    }
}
import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class Recept extends Component {

    render() {

        var data = {
            titel: "Vegan Burger",
            foto: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80",
            beschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            datumToegevoegd: "26-07-2021",
            prijs: 12,
            personen: 4,
        }

        return (


            <React.Fragment>
                <div className="recept-kaart">
                    <div className="recept-foto"></div>
                        
                        
                    
                    <div  className="recept-details">
                         <div className="recept-info">  
                            <div>
                                <img></img>
                                <p>{data.personen}</p>
                            </div>
                            <div>
                                <img></img>
                                <p>{data.prijs}</p>
                            </div>
                            <div>
                                <img></img>
                                <p>{data.personen}</p>
                            </div>
                        </div> 
                        
                        <section>
                            <h1>{data.titel}</h1>
                            <div>
                                
                            </div>
                        </section>
                        
                        {data.beschrijving}
                    </div>
                </div>

            </React.Fragment>

        )

    }
}
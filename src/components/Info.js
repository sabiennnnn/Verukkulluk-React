import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import '../assets/css/info.css'


class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            dataIngredienten: [
                {titel: "Vegan burger bun",
                 omschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                 hoeveelheid: "1 broodje",
                 afb: "https://3brothersbakery.lk/wp-content/uploads/2021/01/burger.png"},

                 {titel: "Vegan burger",
                 omschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                 hoeveelheid: "320 gram",
                 afb: "https://static.ah.nl/static/product/AHI_43545239363737363239_1_LowRes_JPG.JPG?options=399,q85"},

                 {titel: "Vegan burger saus",
                 omschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                 hoeveelheid: "30 ml",
                 afb: "https://i.ebayimg.com/images/g/o4gAAOSwJUdeoAk9/s-l300.jpg"},

                 {titel: "Avocado",
                 omschrijving: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                 hoeveelheid: "1 stuks",
                 afb: "https://cdn.picpng.com/avocado/avocado-transparent-25296.png"}
            ]
        }
    }

    toggle(toggleTo) {
        this.setState({
            activeTab: toggleTo
        })
    }
    
    
    
    render() {
        return(
           
            <div>
             
                <Nav tabs>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                        Ingrediënten
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>
                        Bereidingswijze
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}>
                        Opmerkingen
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <ul>
                            {this.state.dataIngredienten.map((item, index) => {
                                return <li key={index} className="list-ingr flex">
                                    <div className="ingr-1">
                                        <img src={item.afb} alt="burger bun" className="afb-ingredienten"></img>
                                    </div>
                                    <div className="ingr-2">
                                        <h2>{item.titel}</h2>
                                        <p>{item.omschrijving}</p>
                                       <div className="flex-st"><h4>Hoeveelheid: </h4><p>{item.hoeveelheid}</p></div> 
                                    </div>
                           </li>
                    })}
                            </ul>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 2 Contents</h4>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 3 Contents</h4>
                        </Col>
                    </Row>
                    </TabPane>
                </TabContent>
            </div>
 

        )
    }

}

export default Info;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import '../assets/css/info.css'
import Bereidingswijze from './Bereidingswijze';
import Opmerkingen from './Opmerkingen';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            recipe: this.props.recipe,
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    toggle(toggleTo) {
        this.setState({
            activeTab: toggleTo
        })
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
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
                                    {/* // pasta saus afb /recipes ipv /recipe //*/}
                                    <ul>
                                        {this.state.recipe.ingredients.map((ingredient) =>
                                            <li key={ingredient.id} className="list-ingr">
                                                <div className="flex-st">
                                                    <div className="ingr-1">
                                                        <img src={ingredient.article.image} alt="ingredient" className="afb-ingredienten"></img>
                                                    </div>
                                                    <div className="ingr-2">
                                                        <h2>{ingredient.article.title}</h2>
                                                        <p>{ingredient.article.description}</p>
                                                        <div className="flex-st-mb">
                                                            <h4>Hoeveelheid: </h4>
                                                            <p>{ingredient.amount} {ingredient.article.unit}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Bereidingswijze recipe={this.state.recipe}></Bereidingswijze>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <Opmerkingen recipe={this.state.recipe}></Opmerkingen>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
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

export default Info;
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
            aData: [this.props.data],
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
        if(this.state.isLoaded) {
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
                                {this.state.aData.map((item, index) => {
                                    return (
                                        <li key={index} className="list-ingr flex-st">
                                            <div className="ingr-1">
                                                <img src={item.ingredients[0].article.image} alt="ingredient" className="afb-ingredienten"></img>
                                            </div>
                                            <div className="ingr-2">
                                                <h2>{item.ingredients[0].article.title}</h2>
                                                <p>{item.ingredients[0].article.description}</p>
                                                <div className="flex-st">
                                                    <h4>Hoeveelheid: </h4>
                                                    <p>{item.ingredients[0].amount} {item.ingredients[0].article.unit}</p>
                                                </div> 
                                            </div>
                                        </li> )})}
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

    render() {
        return(
           <React.Fragment>
                {/* this.renderHeader() */}
                { this.renderContent() }
                {/* this.renderFooter() */}
            </React.Fragment>
        )
    }
}

export default Info;
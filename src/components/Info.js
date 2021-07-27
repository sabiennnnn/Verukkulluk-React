import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';



class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
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
                <p>Ingrediënten, Bereidingswijze en Opmerkingen</p>
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
                        <h4>Tab 1 Contents</h4>
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
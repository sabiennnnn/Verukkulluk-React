import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from 'react-router';

import API from '../lib/API';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/invoerpage.css';
import burger from '../assets/img/verrukkulluk-burger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class InvoerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipes: this.props.recipes
        }
    }

    componentDidMount() {
        API.fetchRecipes('https://api.educom.nu/get/kitchentype')
            .then( (result) => {
            this.setState({
                isLoaded: true,
                recipeInfo: result
            })
        })
    }

    renderHeader() {
        return (
            <Header></Header>
        )
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                <Container>
                    <Row className="mt-md-5 gx-7">
                        <Col xs="12" md="4" className="p-5 back-afb">
                            <Form>
                                <FormGroup>
                                    <img src={burger} alt="upload afbeelding" className="afb-upload"/>
                                    <Input type="file" name="afbeelding" id="afbeeldingRecept" className="inputfile"/>
                                    <Label for="afbeeldingRecept">Afbeelding toevoegen</Label>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs="12" md="8" className="p-5">
                            <h1 className="titelInvoer">Recept Toevoegen</h1>
                            <Form>
                              <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="titelRecept">Titel recept</Label>
                                    <Input type="text" name="titelRecept" id="titelRecept" placeholder="spaghetti"/>
                                </FormGroup>
                                </Col>
                              </Row>
                              <Row form>
                                  <Col md={12}>
                                <FormGroup>
                                    <Label for="omschrRecept">Receptomschrijving</Label>
                                    <Input type="textarea" name="text" id="omschrRecept" placeholder="overheerijk recept van mijn oma"/>
                                </FormGroup>
                                </Col>
                                </Row>
                                <Row form>
                                  <Col md={6}>
                                    <FormGroup>
                                        <Label for="keukenRecept">Keuken</Label>
                                        <Input type="select" name="select" id="keukenRecept">
                                        <option selected disabled hidden>selecteer...</option>
                                        {this.state.recipeInfo.recipeKitchen.map((keuken) => {
                                            return(
                                                <option 
                                                key={keuken.id}
                                                value={keuken.id}>{keuken.description}</option>
                                            )})}
                                        </Input>
                                    </FormGroup>
                                    </Col><Col md={6}>
                                    <FormGroup>
                                        <Label for="typeRecept">Type</Label>
                                        <Input type="select" name="select" id="typeRecept">
                                        <option selected disabled hidden>selecteer...</option>
                                        {this.state.recipeInfo.recipeType.map((type) => {
                                            return(
                                                <option 
                                                key={type.id} 
                                                value={type.id}>{type.description}
                                                </option>
                                            )})}
                                        </Input>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                            <h2 className="h2-recept">Voeg ingrediënten toe</h2>
                            <Form>
                                <Row form>
                                    <Col md={5}>
                                    <FormGroup>
                                        <Label for="naamIngredient" >Naam ingrediënt</Label>
                                        <Input type="text" name="naamIngredient" id="naamIngredient" placeholder="melk"/>
                                    </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                    <FormGroup>
                                        <Label for="naamIngredient" > Hoeveelheid </Label>
                                        <Input type="text" name="naamIngredient" id="naamIngredient" placeholder="500"/>
                                    </FormGroup>
                                    </Col>

                                    <Col md={2}>
                                    <FormGroup>
                                        <Label for="gramIngredient" >  </Label>
                                        <Input type="select" name="gramIngredient" id="gramIngredient">
                                            <option selected disabled hidden>selecteer...</option>
                                            <option>gram</option>
                                            <option>ml</option>
                                            <option>l</option>
                                            <option>pak</option>
                                        </Input>
                                    </FormGroup>
                                    </Col>

                                    <Col md={1}>
                                    <button className="button-recept-invoer"><FontAwesomeIcon icon={faPlus} size="sm"/></button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    renderFooter() {
        return (
            <Footer></Footer>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderFooter()}
            </React.Fragment>
        )
    }
}

export default withRouter(InvoerPage);
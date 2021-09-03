import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from 'react-router';

import API from '../lib/API';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/invoerpage.css';
import burger from '../assets/img/verrukkulluk-burger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function InvoerPage(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    //const [recipes, setRecipes] = useState(props);
    const [inputFields, setInputFields] = useState([
        { ingredientName: '', ingredientHoeveelheid: '' }
    ]);
    const [recipeType, setRecipeType] = useState([]);
    const [recipeKitchen, setRecipeKitchen] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        API.fetchRecipes('https://api.educom.nu/get/kitchentype')
        .then(
            (result) => {
                setIsLoaded(true);
                setRecipeType(result.recipeType);
                setRecipeKitchen(result.recipeKitchen);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        
    }, []) //empty array here

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    }

    const handleChangeInput = (index, event) => {
        console.log(index, event.target.name);
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { ingredientName: '', ingredientHoeveelheid: '' }])
    }

     if (error) {
         return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
         return <div>Loading...</div>;
     } else {
            return (
            <React.Fragment>
            <Header></Header>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row form className="mt-md-5 gx-7">
                            <Col xs="12" md="4" className="p-5 back-afb">

                                <FormGroup>
                                    <img src={burger} alt="upload afbeelding" className="afb-upload" />
                                    <Input type="file" name="afbeelding" id="afbeeldingRecept" className="inputfile" />
                                    <Label for="afbeeldingRecept">Afbeelding toevoegen</Label>
                                </FormGroup>

                            </Col>

                            <Col xs="12" md="8" className="p-5">
                                <h1 className="titelInvoer">Recept Toevoegen</h1>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="titelRecept">Titel recept</Label>
                                            <Input type="text" name="titelRecept" id="titelRecept" placeholder="spaghetti" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label for="omschrRecept">Receptomschrijving</Label>
                                            <Input type="textarea" name="text" id="omschrRecept" placeholder="overheerijk recept van mijn oma" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="keukenRecept">Keuken</Label>
                                            <Input type="select" name="select" id="keukenRecept" defaultValue="0">
                                                <option value="0" disabled hidden>selecteer...</option>
                                                { recipeKitchen.map((keuken) => {
                                                    return (
                                                        <option
                                                            key={keuken.id}
                                                            value={keuken.id}>{keuken.description}</option>
                                                    )
                                                })}
                                            </Input>
                                        </FormGroup>
                                    </Col><Col md={6}>
                                        <FormGroup>
                                            <Label for="typeRecept">Type</Label>
                                            <Input type="select" name="select" id="typeRecept" defaultValue="0">
                                                <option value="0" disabled hidden>selecteer...</option>
                                                {recipeType.map((type) => {
                                                    return (
                                                        <option
                                                            key={type.id}
                                                            value={type.id}>{type.description}
                                                        </option>
                                                    )
                                                })}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <h2 className="h2-recept">Voeg ingrediënten toe</h2>

                                <Row form className="container">
                                    {inputFields.map((inputField, index) => (
                                       
                                            <div key={index} className="flex" style={{marginTop: 14}}>
                                            <Col md={5} >
                                                <FormGroup>
                                                    <Label for="ingredientName" >Naam ingrediënt</Label>
                                                    <Input type="text"
                                                        name="ingredientName"
                                                        id="ingredientName"
                                                        placeholder="melk" 
                                                        value={inputField.ingredientName}
                                                        onChange={event => handleChangeInput(index, event)}/>
                                                </FormGroup>
                                            </Col>

                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="ingredientHoeveelheid" > Hoeveelheid </Label>
                                                    <Input  type="text" 
                                                            name="ingredientHoeveelheid" 
                                                            id="ingredientHoeveelheid" 
                                                            placeholder="500"
                                                            value={inputField.ingredientHoeveelheid}
                                                            onChange={event => handleChangeInput(index, event)} />
                                                </FormGroup>
                                            </Col>

                                            <Col md={2}>
                                                <FormGroup>
                                                    <Label for="gramIngredient" >  </Label>
                                                    <Input type="select" name="gramIngredient" id="gramIngredient" defaultValue="0">
                                                        <option value="0" disabled hidden>selecteer...</option>
                                                        <option value="1">gram</option>
                                                        <option value="2">ml</option>
                                                        <option value="3">l</option>
                                                        <option value="4">pak</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                            <Col md={1}>
                                                <button className="button-recept-invoer"
                                                        onClick={() => handleAddFields()}
                                                ><FontAwesomeIcon icon={faPlus} size="sm" /></button>
                                            </Col>
                                            </div>
                                    ))}
                                </Row>

                                <Row form>
                                    <Col md={12}>
                                        <button onClick={handleSubmit}>Bakkers klaar? Bakken maar!</button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Footer></Footer>
            </React.Fragment>
            )
        }
    }

export default withRouter(InvoerPage);
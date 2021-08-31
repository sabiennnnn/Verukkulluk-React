import React, { Component } from 'react';

import logo from '../assets/img/logo-v2.png';
import '../assets/css/header.css'

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipes: this.props.recipes,
            query: '',
            searchString: this.props.recipes
        }
    }

    componentDidMount() {

        console.log({recipes: this.state.recipes});
        this.setState({
            isLoaded: true
        })
    }

    showSettings (event) {
        event.preventDefault();
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        }, () => {
        this.filterArray(e.target.value);
        }) 
       
    }

    filterArray = (q) => {
        let recipesData = this.state.recipes;

        if (q.length > 0) {
            recipesData = this.state.recipes.filter(recipe => {
                return recipe.title.toString().toLowerCase().indexOf(q.toString().toLowerCase()) > -1
                //return false;
            });
        }
        this.props.handler(recipesData);
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                
                <Container fluid>
                    <Row className="horizFix">
                        <Col xs="12" md="12">
                        <header className="hero-foto">
                            <nav className="flex">
                                <Link to="/"><img src={logo} alt="Logo"></img></Link>
                                <div className="wrap-search flex">
                                    <div className="search-wrapper">
                                        <form>
                                            <input
                                                className="search-input effect-6"
                                                type="text"
                                                placeholder="Zoeken"
                                                id="searchbar"
                                                name="s"
                                                onChange={this.handleInputChange}
                                                value={this.state.query}
                                            />
                                            <div>
                                                
                                                <p></p>
                                                
                                                
                                            </div>

                                        </form>
                                    </div>
                                    <div className="wrap-menu flex">   
                                        <Menu right width={ '340px' } disableAutoFocus>
                                            <a id="home" className='menu-item' href="/"> Home </a>
                                            <a id="recept" className='menu-item' href="/recept/1"> Recept </a>
                                            <a id="favorieten" className='menu-item' href="/"> Mijn favorieten </a>
                                            <a id="boodschappen" className='menu-item' href="/"> Boodschappenlijst </a>
                                        </Menu>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        </Col>
                    </Row>
                </Container>
                
                
                
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
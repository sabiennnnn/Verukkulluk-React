import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import './assets/css/main.css';

import API from './lib/API';
import Recept from './components/Recept';
import Agenda from './components/Agenda';
import Header from './components/Header';
import Login from './components/Login';
import Info from './components/Info';


class App extends Component {

  componentDidMount() {

    // API.fetchData('https://')
    //   .then( data => {
    //     console.log(data);
    //     this.setState({ data: data })
    //   })
    //   .catch( error => {
    //     console.log(error)
    //   })

  }



  render() {



    return (

      <React.Fragment>
        <Container fluid>
          <Row>
          <Col xs="12" md="12">
            <Header></Header>
          </Col>
          </Row>
        </Container>

        <Container>
          <Row className="mt-5">
            <Col xs="12" md="4" className="p-5">
              <Row>
                <Col xs="12" md="12" >
                  <Agenda></Agenda>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12" className="mt-5"><Login></Login></Col>
              </Row>
            </Col>

            <Col xs="12" md="8" className="p-5">
              <Row>
                <Col xs="12" md="12" >
                  <Recept></Recept>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12" className="mt-5"><Info></Info></Col>
              </Row>
            </Col>
          </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col xs="12" md="12" style={{backgroundColor: 'orange'}}>
              </Col>
            </Row>
          </Container>

        
      </React.Fragment>

    )
  }

}



export default App;
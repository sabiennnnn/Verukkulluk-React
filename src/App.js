import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import './assets/css/main.css';

import API from './lib/API';
import Recept from './components/Recept';
import Agenda from './components/Agenda';
import Header from './components/Header';


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

          <Row>
            <Col xs="12" md="4">
              <Row>
                <Col xs="12" md="12" >
                  <Agenda></Agenda>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12" ></Col>
              </Row>
            </Col>

            <Col xs="12" md="8">
              <Row>
                <Col xs="12" md="12" >
                  <Recept></Recept>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="12" ></Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </React.Fragment>

    )
  }

}



export default App;

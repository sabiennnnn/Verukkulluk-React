import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './assets/css/main.css';

import API from './lib/API';
import PageRecept from './components/PageRecept';
import Homepage from './components/Homepage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        item: []
    }
  }

  componentDidMount() {
    API.fetchRecipes('https://api.educom.nu/get/recipe')
    .then( (result) => {
        console.log("result: " + result);
        this.setState({
            isLoaded: true,
            item: result
        })
    })
    .catch( error => {
        console.log(error)
    })
}


  renderContent() {
    if (this.state.isLoaded) {
      return (
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Route path="/" 
              exact render={ (props) => <Homepage { ...props }
                                        data={this.state.item}
                                        />}/>
              
              <Route path="/recept" 
              exact render={ (props) => <PageRecept { ...props }
                                        data={this.state.item[0]}
                                        />} />
                                        
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      )
    }
  }

  render() {
    return(
      <React.Fragment>
        { this.renderContent() }
      </React.Fragment>
    )
  }

}



export default App;
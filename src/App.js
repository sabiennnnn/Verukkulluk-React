import React, { Component } from 'react';

import './App.css';
import './assets/css/main.css';

import API from './lib/API';
import PageRecept from './components/PageRecept';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        item: {}
    }
  }

  componentDidMount() {
    API.fetchRecipes('https://api.educom.nu/get/recipe')
    .then( (result) => {
        console.log(result);
        this.setState({
            isLoaded: true,
            item: result[0]
        })
    })
    .catch( error => {
        console.log(error)
    })
}


  renderContent() {
    if(this.state.isLoaded) {
        return(

          <PageRecept data={this.state.item}></PageRecept>
         
        )
    }
  }




  render() {

    return (
      <React.Fragment>
        {/* this.renderHeader() */}
        { this.renderContent() }
        {/* this.renderFooter() */}
      </React.Fragment>
      

    )
  }

}



export default App;
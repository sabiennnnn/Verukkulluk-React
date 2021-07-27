import React, { Component } from 'react';

import './App.css';
import './assets/css/main.css';

// import API from './lib/API';
import PageRecept from './components/PageRecept';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        data: this.props.data ? this.props.data : false,
    }
  }

  componentDidMount() {
    // Eventueel API call
    this.setState({
        isLoaded: true
    })
  }


  renderContent() {
    if(this.state.isLoaded) {
        return(

          <PageRecept></PageRecept>
         
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
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/css/main.css';

import Header from './Header';


class Homepage extends Component {

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
                <div>Component</div>
            )
        }
    }

    renderHeader() {
        return(
            <Header></Header>
        )
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

export default Homepage;
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: this.props.data
        }
    }


    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <div className="search-wrapper">
                    <input className="search-input effect-6"
                        type="text"
                        placeholder="Zoeken"
                        id="searchbar"
                    />
                    <span className="focus-border"></span>
                </div>
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

export default SearchBar;
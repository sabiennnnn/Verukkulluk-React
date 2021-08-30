import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            recipes: this.props.recipes,
            query: '',
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    renderContent() {
        if (this.state.isLoaded) {
            return (
                <div className="search-wrapper">
                    <form>
                        <input 
                        className="search-input effect-6"
                        type="text"
                        placeholder="Zoeken"
                        id="searchbar"
                        name="s"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        />
                        <p>{this.state.query}</p>
                    </form>
                    <ul>

                    </ul>
                </div>
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

export default SearchBar;
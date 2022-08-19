import React from "react";

import "./Search.css";

import search from "./assets/search.svg";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }

        this.handleSearch = this.handleSearch.bind(this);

    }


    handleSearch(event) {
        this.setState({
            search: event.target.value
        });
        
    }

    render() {
        return(
            <div className="SearchContainer">
                <div className="SearchSubContainerOne">
                    <img src={search} alt="Search" />
                </div>

                <div className="SearchSubContainerTwo">
                    <input placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
                </div>
            </div>
        );
    }
}

export default Search;
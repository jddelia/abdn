import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchResultsContainer from './SearchResultsContainer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: ''
    };
    this.handleSearchFilterchange = this.handleSearchFilterchange.bind(this);
  }

  componentDidMount() {
    this.props.history.listen(() => {
      console.log('tes')
      window.scrollTo(0, 0);
    });
  }

  handleSearchFilterchange(value) {
    this.setState({
      searchFilter: value
    });
  }

  render() {
    return (
      <div id="search-container">
      <h2 id="search-heading"><span>Search</span></h2>
      <div id="search-content">
        <SearchBar onChange={this.handleSearchFilterchange} />
        <SearchResultsContainer searchFilter={this.state.searchFilter} />
      </div>
    </div>
    );
  }
}

export default withRouter(Search);
import React from 'react';
import SearchResult from './SearchResult';
import DataContext from '../../AppContext';

const SearchResultsContainer = ({ searchFilter }) => {
  function dataManager(articles) {

    if (searchFilter === '') return;

    const searchResults = articles.filter(item => {
      return item.title.toLowerCase().includes(searchFilter.toLowerCase());
    });

    return searchResults.map(item => {
      return (
        <SearchResult key={item.id} article={item} />
      );
    })
  }

  return (
    <DataContext.Consumer>
      {(articles) => {
        if (!articles) return;

        return (
          <div id="search-results-container">
            {dataManager(articles)}
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default SearchResultsContainer;
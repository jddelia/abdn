import React from 'react';

const SearchBar = ({ onChange }) => {
  
  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div id="search-bar-container">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search..." 
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
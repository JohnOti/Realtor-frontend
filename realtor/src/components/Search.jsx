import React from "react";

function Search({ searchPerson, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Person:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPerson}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
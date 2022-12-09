function Search({ searchTerm, onSearchChange}) {
    return (
      <div className="searchbar">
        <label htmlFor="search">Search House:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a location to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
}

export default Search;
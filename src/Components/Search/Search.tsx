function Search({ search, setSearch, handleSearch }: any): JSX.Element {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;

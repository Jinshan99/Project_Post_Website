function Search({ setSearchValue, searchValue, onSearch }) {

  return (
    <form className='search' onSubmit={onSearch}>
      <input
        placeholder='Search for Project'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default Search
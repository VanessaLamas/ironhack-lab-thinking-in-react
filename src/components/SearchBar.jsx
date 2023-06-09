import { useState } from "react";
function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    props.handleSearch(value);
  };
  return (
    <div className='search-bar'>
      <h3>Search Product:</h3>
      <input type="text" value={searchTerm} onChange={handleChange} />
    </div>
  );
}
export default SearchBar;
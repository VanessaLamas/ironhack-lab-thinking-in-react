import { useState } from "react";

function SearchCheck(props) {
  const [searchCheckBox, setSearchCheckBox] = useState('');
  const handleCheckbox = (event) => {
    const { value } = event.target;
    setSearchCheckBox(value);
    props.handleCheckbox(value);
  };
  return (
    <div className='search-checkbox'>
      <h5>Select to see in stock: <input type="checkbox" value={searchCheckBox} onChange={handleCheckbox} /></h5>
    </div>
  );
}

export default SearchCheck;




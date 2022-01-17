import { AiOutlineSearch } from "react-icons/ai";

import "./styles.css";

function Search({ dateInput, setDateInput }) {
  const handleInputChange = (e) => {
    setDateInput(e.target.value);
  };

  return (
    <div className="search-container">
      <AiOutlineSearch className="search-icon" />
      <input
        placeholder="Date (YYYY-MM-DD)"
        value={dateInput}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;

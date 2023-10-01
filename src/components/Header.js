// header.js
import React, { useState } from "react";
import headerStyle from "../css/header.module.css";

const Header = ({ setSearchQuery }) => {
  const [searchText, setSearchText] = useState(""); // State to store the search input text

  const handleSearch = () => {
    setSearchQuery(searchText); // Set the searchQuery state in Card component
  };

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.overall}>
        <input
          type="text"
          placeholder="Search for images..."
          className={headerStyle.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;

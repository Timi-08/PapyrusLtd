import React from "react";

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <i className="ri-search-line"></i>
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      style={{
        padding: "5px 10px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  </div>
);

export default SearchBar;

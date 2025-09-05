import React from "react";

const SortBy = ({ value, onChange }) => (
  <div className="sort-sec">
    <p>Sort by:</p>
    <select className="sorting" value={value} onChange={onChange}>
      <option value="price">Price</option>
      <option value="title">Title</option>
      <option value="newest">Newest</option>
    </select>
  </div>
);

export default SortBy;

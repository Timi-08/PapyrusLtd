import React from "react";
import { NavLink } from "react-router-dom";
const categories = [
  "All",
  "Birthday",
  "Annniversary",
  "Friendship",
  "New year",
  "Mothers Day",
  "Others",
];

const formatPath = (label) =>
  "/" + label.toLowerCase().replace(/'/g, "").replace(/\s+/g, "");
const Menu = () => {
  return (
    <nav className="menu">
      {categories.map((category) => (
        <NavLink
          key={category}
          to={formatPath(category)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;

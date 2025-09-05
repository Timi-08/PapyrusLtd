import React from "react";
import VisitorCounter from "./VisitorCounter";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/Logo.png" alt="Logo" />
      <VisitorCounter />
    </header>
  );
};

export default Header;

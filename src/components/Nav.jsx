import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="flex flex-col md:flex-row md:justify-evenly items-center justify-center h-full w-full"
    >
      <Link to="/shop">Shop</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;

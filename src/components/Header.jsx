import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemCount } from "../slices/cartSlice";
import Nav from "./Nav";

function Header() {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <header className="fixed z-20 top-0 right-0 left-0 grid grid-cols-12 items-center bg-mainGold px-4 h-20">
      <div className="brand col-span-3">
        <Link to="/">
          <h1 className="text-2xl">Some Brand</h1>
        </Link>
      </div>
      <div
        id="main-nav"
        className="hidden fixed left-0 top-20 md:top-0 h-screen bg-mainGold w-96 md:w-full md:inline md:relative md:h-auto md:col-span-6"
      >
        {<Nav />}
      </div>

      <div className="icons col-span-9 md:col-span-3 flex items-center justify-around md:justify-between">
        <button className="icon-btn">
          <i className="fa fa-search"></i>
        </button>
        <Link to="account">
          <button>
            <i className="fa fa-user"></i>
          </button>
        </Link>
        <Link to="shop/cart">
          <button className="relative">
            <i className="fa fa-shopping-bag">
            </i>
            <span className="count text-sm  absolute -top-2 right-2">
              ({cartItemCount})
            </span>
          </button>
        </Link>
        <button
          onClick={() => {
            document.getElementById("main-nav").classList.toggle("hidden");
          }}
          className="md:hidden"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;

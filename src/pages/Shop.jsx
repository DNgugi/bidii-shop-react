import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "../features/api/authApi";
import Products from "../components/Products";
import ShopSidebar from "../components/ShopSidebar";
import Footer from "../components/Footer";
import { calculateCartTotal, selectCartItems } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import {featured as data} from '../features/api/api'

function Shop() {
  const toggleSidebar = () => {
    document.getElementById("shop-sidebar").classList.toggle("hidden");
    const shop = document.getElementById("shop");
    const classes = shop.classList;
    if (
      classes.contains("sm:col-span-8") &&
      classes.contains("md:col-span-9")
    ) {
      classes.remove("sm:col-span-8", "md:col-span-9");
    } else {
      classes.add("sm:col-span-8", "md:col-span-9");
    }
  };

  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateCartTotal());
  }, [cart, dispatch]);
  
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  

  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll min-h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Shop</h1>
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-0 left-4 mb-2"
      >
        <i className="fa fa-bars"></i>
      </button>

      <div
        id="shop-sidebar"
        className="col-span-full sm:col-span-4 md:col-span-3 sm:h-screen p-4"
      >
        <ShopSidebar />
      </div>
      <div
        id="shop"
        className="col-span-full sm:col-span-8 md:col-span-9 overflow-y-scroll grid grid-cols-12 min-h-screen p-4"
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occured, please try again</p>
        ) : (
          <Products products={products} />
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Shop;

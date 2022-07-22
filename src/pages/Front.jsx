import React from "react";

import Hero from "../components/Hero";
import HomeCategories from "../components/forms/HomeCategories";
import ProductFeature from "../components/ProductFeature";
import Footer from "../components/Footer";

function Front() {
  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll max-h-screen h-screen w-screen"
    >
      <Hero />

      <HomeCategories />
      <ProductFeature />
      <Footer />
     
    </main>
  );
}

export default Front;

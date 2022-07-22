import React from 'react'
import { featured } from "../api";
import Products from './Products';



function ProductFeature() {
  return (
    <section
      id="categories"
      className="col-span-full grid grid-cols-12 gap-4 items-center px-5 py-5 mb-5"
    >
      {<Products products={featured} />}
    </section>
  );
}

export default ProductFeature
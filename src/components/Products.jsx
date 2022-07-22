import React from "react";
import Product from "./Product";

function Products({ products }) {
      return products.map((product) => (
        <Product product={product} />
      ))
;
}

export default Products;

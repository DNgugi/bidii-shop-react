import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../slices/cartSlice';

function Product({ product }) {
  const prodRef = useRef();
  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };
  // const showBtn = () => {
  //   const current = prodRef.current;
  //     current.querySelector('.add-to-cart').classList.toggle('hidden')
  // }
  

  return (
    <div
      ref={prodRef}
      key={product.id}
      className="product col-span-full sm:col-span-6 md:col-span-3 flex items-center justify-center"
    >
      <Link to={`product/${product.sku}`}>
        <img src={product.images.map(img => (img.thumbnail))} alt="" />
      </Link>
      <h3 className="text-xl text-dark mt-2 mb-2">{product.name}</h3>
      <h2
        className="text-lg text-woocommerce md-3"
        dangerouslySetInnerHTML={{ __html: product.price_html }}
      ></h2>

      <button className="add-to-cart" onClick={() => { handleAddToCart(product) }}>
        {product.add_to_cart.text}
      </button>
    </div>
  );
}

export default Product;

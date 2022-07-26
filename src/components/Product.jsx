import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, calculateCartTotal } from "../slices/cartSlice";

function Product({ product }) {
  const prodRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReadMoreClick = (prod) => {
    navigate(`product/${prod.id}`);
  };
  const handleAddToCart = (prod) => {
    dispatch(calculateCartTotal());
    dispatch(addToCart(prod));
  };
  return (
    <div
      ref={prodRef}
      key={product.node.id}
      className="product col-span-full sm:col-span-6 md:col-span-3 flex items-center justify-center"
    >
      <Link to={`product/${product.node.id}`}>
        <img
          src={
            product.node.image !== null
              ? product.node.image.mediaItemUrl
              : "https://karyhealthproducts.com/wp-content/uploads/2022/07/Test-Product.png"
          }
          alt=""
        />
      </Link>
      <h3 className="text-xl text-dark mt-2 mb-2">{product.node.name}</h3>
      <h2
        className="text-lg text-woocommerce md-3"
        dangerouslySetInnerHTML={{ __html: product.node.price }}
      ></h2>
      {product.node.stockStatus === "IN_STOCK" ? (
        <div className="flex flex-col justify-between w-full">
          <button
            className="add-to-cart"
            onClick={() => {
              handleAddToCart(product.node);
            }}
          >
            Add to cart
          </button>
          <button
            className="mt-2 underline"
            onClick={() => {
              handleReadMoreClick(product.node);
            }}
          >
            More Details
          </button>
        </div>
      ) : (
        <button
          className="btn-primary"
          onClick={() => {
            handleReadMoreClick(product.node);
          }}
        >
          Read More
        </button>
      )}
    </div>
  );
}

export default Product;

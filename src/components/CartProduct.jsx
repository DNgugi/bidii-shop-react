import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

function CartProduct({product}) {
  
  const dispatch = useDispatch();
  const handleRemoveFromCart = (prod) => {
    dispatch(removeFromCart(prod));
  };

  return (
    <div
      key={product.id}
      className="col-start-1 col-span-4 flex flex-col items-center justify-center"
    >
        <img src={product.images.map((img) => img.thumbnail)} alt="" width={100} height={100} />
      <h3 className="text-xl text-dark mt-2 mb-2">{product.name}</h3>
      <button
        onClick={() => {
          handleRemoveFromCart(product);
        }}
        className="text-sm text-red-500 underline hover:text-red-900 hover:no-underline"
          >
              Remove
      </button>
    </div>
  );
}

export default CartProduct;

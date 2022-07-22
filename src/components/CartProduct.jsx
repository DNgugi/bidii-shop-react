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
        <img src={product.images.map((img) => img.thumbnail)} alt="" width={150} height={150} />
      <h3 className="text-xl text-dark mt-2 mb-2">{product.name}</h3>
      <button
        onClick={() => {
          handleRemoveFromCart(product);
        }}
          >
              Remove
      </button>
    </div>
  );
}

export default CartProduct;

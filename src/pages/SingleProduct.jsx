import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/api/authApi";
import { addToCart, calculateCartTotal } from "../slices/cartSlice";
import Footer from "../components/Footer";

function SingleProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (prod) => {
    dispatch(calculateCartTotal());
    dispatch(addToCart(prod));
  };

  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductQuery(id);
  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll min-h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Product Details</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured, please try again</p>
      ) : (
        <div key={product.id} className="col-span-full grid grid-cols-12 p-4">
          <img
            className="col-span-full md:col-span-6"
            src={
              product.image !== null
                ? product.image.mediaItemUrl
                : "https://karyhealthproducts.com/wp-content/uploads/2022/07/Test-Product.png"
            }
            alt=""
          />
          <div className="details col-span-full md:col-span-6 ">
            <h3 className="text-xl text-dark mt-2 mb-2">{product.name}</h3>
            <p
              className="text-base"
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            >
            </p>
            <h2
              className="text-lg text-woocommerce md-3"
              dangerouslySetInnerHTML={{ __html: product.price }}
            ></h2>
            {product.stockStatus === "IN_STOCK" ? (
              <button
                className="add-to-cart"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to cart
              </button>
            ) : (
              <span className="m-2">
                <i className="fa fa-warning"></i> Sorry, {product.name} is out
                of stock
              </span>
                )}
                <button className="w-1/2 self-end btn-primary" onClick={() => navigate(-1)}>
                  Back to the shop
                </button>
              </div>
              
        </div>
      )}

      <Footer />
    </main>
  );
}

export default SingleProduct;

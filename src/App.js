import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ShopOutlet from "./pages/ShopOutlet";
import Front from "./pages/Front";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import SignUp from "./pages/SignUp";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShopOutlet />}>
          <Route index element={<Front />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="shop" element={<ShopOutlet />}>
            <Route index element={<Shop />} />
            <Route path="cart" element={<ShopOutlet />}>
              <Route index element={<Cart />} />
              <Route path="checkout" element={<ShopOutlet />}>
                <Route index element={<Checkout />} />
                <Route path="confirmation" element={<ShopOutlet />}>
                  <Route index element={<Confirmation />} />
                  <Route path="thankyou" element={<Thankyou />}></Route>
                </Route>
              </Route>
            </Route>
            <Route path="product/:sku" element={<SingleProduct />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

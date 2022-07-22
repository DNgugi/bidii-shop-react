import React from "react";
import BillingForm from "../components/forms/BillingForm";
// import DeliveryForm from "../components/forms/DeliveryForm";
import { selectCartTotal } from '../slices/cartSlice';
import { useSelector } from "react-redux";


function Checkout() {
    const total = useSelector(selectCartTotal);

  return (
    <div className="relative grid grid-cols-12 gap-x-2 md:gap-x-4 col-span-full w-screen mx-auto pb-5 snap-start h-screen">
      <div className="col-start-2 col-span-6">
        <BillingForm total={ total} />
      </div>
      
    </div>
  );
}

export default Checkout;

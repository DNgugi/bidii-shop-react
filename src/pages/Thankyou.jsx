import React from 'react'
import Footer from '../components/Footer'

function Thankyou() {
  return (
        <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll max-h-screen h-screen w-screen grid-rows-[50px_minmax(100px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Thank you!</h1>
      
      <div className="col-span-full w-screen flex flex-col items-center justify-center">
        Your order was placed successfully, we will be in touch to arrange delivery!
      </div>
      <Footer />
      </main>
  )
}

export default Thankyou
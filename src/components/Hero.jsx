import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen col-span-full flex 
        items-center justify-center"
    >
      <div className="max-w-sm flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl mb-8">HELLO HEALTH</h1>
        <h4 className="text-center text-base">Lorem ipsum dolor sit amet.</h4>
        <h4 className="text-center text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vel
          fuga deserunt, dolorum sunt repudiandae!
        </h4>
        <Link to="/shop">
          <button className="btn-primary">Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero
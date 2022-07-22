import React from 'react'
import { Link } from 'react-router-dom';
function HomeCategories() {
  return (
    <section
      id="categories"
      className="col-span-full grid grid-cols-12 gap-4 items-center h-screen px-5 py-5 bg-woocommerce"
    >
      <div className="category">
        <h3 className="text-lg text-dark mb-5">One or Other</h3>
        <Link to="shop">
          {" "}
          <button className="btn-primary">Shop Now</button>
        </Link>{" "}
      </div>
      <div className="category">
        <h3 className="text-lg text-dark mb-5">Other One</h3>
        <Link to="shop">
          {" "}
          <button className="btn-primary">Shop Now</button>
        </Link>{" "}
      </div>
      <div className="category">
        <h3 className="text-lg text-dark mb-5">Yet another</h3>
        <Link to="shop">
          {" "}
          <button className="btn-primary">Shop Now</button>
        </Link>{" "}
      </div>
      <div className="category">
        <h3 className="text-lg text-dark mb-5">Other thing</h3>
        <Link to="shop">
          {" "}
          <button className="btn-primary">Shop Now</button>
        </Link>{" "}
      </div>
    </section>
  );
}

export default HomeCategories
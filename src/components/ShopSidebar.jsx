import React from "react";
import { Link } from "react-router-dom";


function ShopSidebar() {
  return (
    <div className="flex flex-wrap h-full w-full p-2 mt-2 md:grid">
         <div className="sm:h-1/3">
          <Link to="#"> Category One</Link>
      
          <Link to="#"> Category Two</Link>
       
          <Link to="#"> Category Three</Link>
        </div>
      <div className="sm:h-1/3 price-filter w-full">
        <label htmlFor="points">Price </label>
        <input className="max-w-full" type="range" id="price" name="price" min="100" max="10000" />
      </div>
      <div className="tags sm:h-1/3">
        <label htmlFor="tags">Benefits</label>
        <select name="tags" id="tags">
          <option value="one">Tag One</option>
          <option value="two">Tag Two</option>
          <option value="three">Tag Three</option>
          <option value="four">Tag Four</option>
        </select>
      </div>
    </div>
  );
}

export default ShopSidebar;

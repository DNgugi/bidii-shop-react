import React from "react";
// import { useParams } from 'react-router-dom';

function SingleProduct() {
  let product = {
    id: 1849,
    name: "Long Sleeve Tee",
    parent: 0,
    type: "simple",
    variation: "",
    permalink: "http://localhost/wordpress/product/long-sleeve-tee/",
    sku: "woo-long-sleeve-tee",
    short_description: "<p>This is a simple product.</p>",
    description:
      "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
    on_sale: false,
    prices: {
      price: "2500",
      regular_price: "2500",
      sale_price: "2500",
      price_range: null,
      currency_code: "KES",
      currency_symbol: "KSh",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
      currency_prefix: "KSh ",
      currency_suffix: "",
    },
    price_html:
      '<span className="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSh</span>&nbsp;25.00</span>',
    average_rating: "0",
    review_count: 0,
    images: [
      {
        id: 1895,
        src: "http://localhost/wordpress/wp-content/uploads/2022/06/long-sleeve-tee-2.jpg",
        thumbnail:
          "http://localhost/wordpress/wp-content/uploads/2022/06/long-sleeve-tee-2-300x300.jpg",
        srcset:
          "http://localhost/wordpress/wp-content/uploads/2022/06/long-sleeve-tee-2.jpg 801w, http://localhost/wordpress/wp-content/uploads/2022/06/long-sleeve-tee-2-300x300.jpg 300w, http://localhost/wordpress/wp-content/uploads/2022/06/long-sleeve-tee-2-100x100.jpg 100w",
        sizes: "(max-width: 801px) 100vw, 801px",
        name: "long-sleeve-tee-2.jpg",
        alt: "",
      },
    ],
    categories: [
      {
        id: 212,
        name: "Tshirts",
        slug: "tshirts",
        link: "http://localhost/wordpress/product-category/clothing/tshirts/",
      },
    ],
    tags: [],
    attributes: [],
    variations: [],
    has_options: false,
    is_purchasable: true,
    is_in_stock: true,
    is_on_backorder: false,
    low_stock_remaining: null,
    sold_individually: false,
    add_to_cart: {
      text: "Add to cart",
      description: "Add &ldquo;Long Sleeve Tee&rdquo; to your cart",
      url: "?add-to-cart=1849",
      minimum: 1,
      maximum: 9999,
      multiple_of: 1,
    },
  };
  // let params = useParams();
  return (
    <div className="relative grid grid-cols-12 gap-x-2 md:gap-x-4 w-screen mx-auto pb-5 snap-start h-screen">
      <div className="col-start-2 col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 p-2 md:gap-x-2">
        <div key={product.id} className="flex items-center justify-center">
          <img src={product.images[0].thumbnail} alt="" />
          <h3 className="text-xl text-dark mt-2 mb-2">{product.name}</h3>
          <h2
            className="text-lg text-woocommerce md-3"
            dangerouslySetInnerHTML={{ __html: product.price_html }}
          ></h2>

          <button className="add-to-cart">{product.add_to_cart.text}</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

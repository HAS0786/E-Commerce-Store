// import React, { useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import ProductPath from "../../../../public/path";

// const products = [
//     {
//       id: 1,
//       name: "Basic Tee",
//       href: "/mensComponent#", // Ensure this link is correct
//       imageSrc:
//         "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: "$35",
//       color: "Black",
//       cart: "Add to Cart",
//       order: "Order Now",
//     },
//      {

//     // Other products...
//   ];

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductPath from "../../../../public/path";
import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/mensComponent#", // Ensure this link is correct
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    cart: "Add to Cart",
    order: "Order Now",
  },
  {
            id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://plus.unsplash.com/premium_photo-1678218594243-5ad331947662?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNoaXJ0cyUyMG1lbnxlbnwwfDB8fHwxNzIwMzUzMzIzfDE&ixlib=rb-4.0.3",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1714568398464-fa1006821617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnRzJTIwbWVufGVufDB8fDB8fHw%3D",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
        {
          id: 4,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2015/01/07/18/13/shirts-591751_640.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
        {
          id: 5,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2013/05/30/02/42/tie-114607_640.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
      
        {
          id: 6,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2018/10/10/14/24/shirt-3737407_640.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
      
        {
          id: 7,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2013/05/30/02/42/tie-114607_640.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
        {
          id: 8,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://plus.unsplash.com/premium_photo-1678218594243-5ad331947662?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHNoaXJ0cyUyMG1lbnxlbnwwfDB8fHwxNzIwMzUzMzIzfDE&ixlib=rb-4.0.3",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
          cart: "Add to Cart",
          order: "Order Now",
        },
  // Other products...
];

const MensComponent = ({ handleAddToCart }) => {
  const [counters, setCounters] = useState({});

  const incrementCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1,
    }));
  };

  const decrementCounter = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: Math.max((prevCounters[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 m-3">
        {products.map((product) => (
          <div key={product.id} className="group relative border-2 border-gray-500 p-2">
            <div className="aspect-w-1 aspect-h-1 w-full h-auto overflow-hidden rounded-md border-b-2 border-gray-600 m-2 lg:aspect-none group-hover:opacity-75 flex justify-center">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-64 w-64 object-cover object-center rounded-md mb-2"
              />
            </div>
            <div className="mt-2 flex flex-col justify-between text-xl">
              <div>
                <h2 className="text-gray-400 text-2xl font-bold">
                  <Link to={product.href} className="hover:text-blue-500">
                    {product.name}
                  </Link>
                </h2>
                <p className="mt-1 text-gray-500 text-xl font-bold">
                  {product.color}
                </p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-xl text-gray-500 font-bold">
                  {product.price}
                </p>
                <div className="flex gap-3 justify-between border-2 border-cyan-700 p-2 rounded-xl">
                  <span onClick={() => decrementCounter(product.id)} className="text-gray-500 text-xl font-bold border-r-2 border-gray-700">
                    <GrFormSubtract size={20} />
                  </span>
                  <span className="text-gray-500 text-xl font-bold">
                    {counters[product.id] || 0}
                  </span>
                  <span onClick={() => incrementCounter(product.id)} className="text-gray-500 text-xl font-bold border-l-2 border-gray-700">
                    <MdAdd size={20} />
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleAddToCart({ ...product, count: counters[product.id] || 0 })}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    {product.cart}
                  </button>
                  <div className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                    <Link
                      to={ProductPath.Order}
                      className="hover:text-blue-500"
                    >
                      {product.order}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensComponent;

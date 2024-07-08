import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductPath from "../../../../public/path";
import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'data:image/jpeg;base64,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',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'data:image/jpeg;base64,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',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'data:image/jpeg;base64,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',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6UneMGJGlv9TmXTpVklHjUjzkuWd5zliZw&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38WCScAmdjEaPhWGqEZSL7QR8O2oHCuQF3A&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },

    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08s_Gv4T4KJJmTamyP5R4lYwhZNtrGMT-Kw&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38WCScAmdjEaPhWGqEZSL7QR8O2oHCuQF3A&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        cart: 'Add to Cart',
        order:"Order Now",
    },
    {
    id: 8,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6UneMGJGlv9TmXTpVklHjUjzkuWd5zliZw&s',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    cart: 'Add to Cart',
    order:"Order Now",
},
    // More products...
];
const BabiesComponent = ({ handleAddToCart }) => {
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
              <div className="mt-2 flex flex-col justify-between text-sm">
                <div>
                  <h3 className="text-gray-700">
                    <Link to={product.href} className="hover:text-blue-500">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-gray-500 text-xl font-bold">
                    {product.color}
                  </p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xl text-gray-900 font-bold">
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


  export default BabiesComponent
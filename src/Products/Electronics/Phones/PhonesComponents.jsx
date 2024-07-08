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
        imageSrc: 'https://images.unsplash.com/photo-1648104063913-9bd7d11af6cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
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
        imageSrc: 'https://images.unsplash.com/photo-1520189123429-6a76abfe7906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
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
        imageSrc: 'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
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
        imageSrc: 'https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
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
        imageSrc: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png',
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
        imageSrc: 'https://cdn.pixabay.com/photo/2019/11/23/11/33/mobile-phone-4646854_640.jpg',
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
        imageSrc: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png',
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
    imageSrc: 'https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    cart: 'Add to Cart',
    order:"Order Now",
},
    // More products...
];

const PhonesComponent = ({ handleAddToCart }) => {
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

  export default PhonesComponent
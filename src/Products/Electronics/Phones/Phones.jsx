import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://images.unsplash.com/photo-1648104063913-9bd7d11af6cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://images.unsplash.com/photo-1520189123429-6a76abfe7906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '/phonesComponent',
    imageSrc: 'https://cdn.pixabay.com/photo/2019/11/23/11/33/mobile-phone-4646854_640.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

export default function Phones() {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <div key={product.id} className="group relative border-2 border-gray-500 p-2">
            <div className="aspect-w-1 aspect-h-1 w-full h-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
              <Link to={product.href}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-64 w-64 object-cover object-center"
                />
              </Link>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <div>
                <h3 className="text-gray-700">
                  <Link to={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-gray-500">{product.color}</p>
              </div>
              <p className="font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

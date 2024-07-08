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
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDGZ83VV-ZdSblz6SJzxCBqs8fMMZKymZ0Q&s',
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
        imageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRcXFRUVFRcVFRUYFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ0OFSsZFR0rNystMjAzLTcrKysrKzQ3Mjc3NzcrNzg3NysrLysrNzArMistNzcrMis4KystLCsrLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBgcFAQj/xABJEAACAgABBQoICggHAQAAAAAAAQIDBAcRMbGyBQYSITJTcXJzoRczNFGRk8HSEyIjJEFhYmOz0UJSVIGCkqThFUSio7TCwxT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAAMAAAAAAAAAAAAAAAAAAQIRMf/aAAwDAQACEQMRAD8A7iAAAAAGgZV90bqVh/gbZ153ZwuBJxz5lDNnzadL9Jv5zbLLowvTbqrA02rfRjf2q7+dvWTR3zY39qt6OF/Y8KDJ4Ae7HfHjH/mbf52Tw3dxT04m71kl7TxIFqsD1obrYn9ou9bZ7xndunfmT/8Aov5cF4+xaZZmuUUKz7iuTHtattAezDHXc/f6633i5TirXpuu9db7x5dbL2HA9OqyfO3eut94tV8LnLfXW+8U6i5UBMoPnLfX3e+Yzg+cu9fd75mjGYFS1S527193vnv72s/wcs8py+PpnOc3oWhzbaR4Np729rxcut7EB7AAAAAAAAAAAAAAAAAAAHNssvJwvTbqrOknNssujC9NuqsDm0CxWV4k9YFmss1lWBaqAtVmWKfxY9rVtowrMsVyY9rVtoD0qy7hyjWXcOB6VJcqKNJcqYFlGFjPqZhNgV7mbBvY8XLr+xGuWs2Lev4uXX9iA9kAAAAAAAAAAAAAAAAAADm2WbRhem3VWdJOa5ZtGF6bdVYHNoliBXgTwAs1ss1sq1lmAE9dyVtMHx8O2Mc31aXn9BZ3VnGNNUsyWb4Jy4s2fNbLO36DxVb8+wsfNNP05y5vin80XUr/ABZAeruVbw6ITaXClCiT/jha5ZunMvQj0sOzxtxn8hT2OH/DuPXoYHp0lytlGkuVgWYsjsZkmRzZBWtZsm9bxcuv7EazazZd6vipdf8A6oo9oAAAAAAAAAAAAAAAAAADm2WZfFwvWt1VnSTm+Wbk4brW6oAc0gyaBTni4QeaUszzZ9D9i+pmcMdX+t3P8gPRgyzWzylunUv0+6X5GX+P4ZabP9M/yAYKXC3Rp+q2K7j0d3383ivuov0XyPK3qWxtx1c4vOlbpzNcfF5+sj092eOmC+5/9wPV3Jj8jT2GH2LT1qCnhquDFR/Vow+ua9pZoA9SllutlGkuVgWUyOxmSZHYyCtazZt6nipdd7KNWuZtG9J/JS672YlHuAAAAAAAAAAAAAAAAAAAc2yzcnC9a3VA6Sc2yy8nC9a3VADiW+ByVkcybXAWhN/pSKUsRPi+K/3Rks/TmzG3xebQyeub84GmPGPhJuppZszWZ5vNw9HG/pzFKdjzNZn/AC+36Do8JPzsn4TzPj+g1crepJp4WS6PykX98u/4M9rGPOoL7EV/UL8yPeQvnEevDaPrfHHqx/5CMq2l8WdfcUbcjKhkdj+M+wo2pGdDA9KllytlGllytgWUyK1maZFYwKtzNq3oeKl13so1O6Rte87xMuu9mIHvAAAAAAAAAAAAAAAAAAAc2yzcnC9Nuqs6Sc2yy8nDdNuqAHM4smgQolgBYgTLQ/3kEGTRAw3jeULrx1mU9MerD8dEW8p/OkvtLWS4ricezg/6hAbLbpfYUa5n2lmF7/Co1WH2hgelSy7WyhQy7WBYTI7GZIitYFW5m27zPEy672Ymn3s2/eX4mXaPZiBsAAAAAAAAAAAAAAAAAAAHN8svJw3Wt1QOkHNssvJw3Wt1QA5miSJHEkiwJ4E8CvEngwIN6j4OOUftE+6vEs/mqj+OmVNyPi7pU/XPXFnob4681c39iK/3EB7mJfFF+eunZs/sfaWQVy4WHon56qO+uZJQwPSoZdqZQoZdqYFlMhtZmmRXMCpfI3HeT4iXaPZiaXezc94/iJdo9mIGxAAAAAAAAAAAAAAAAAAAc1yzaML026qzpRzbLNowvTbqrA5mjOBgjOIE0CeDK8CaDAxwVebdDCPz2ZvQmejvwjmrsXmjXtIhwMUsRh7HxKu1Sb8yacXrL2+WULJT4LTjL4FZ11kmBZwsfmGFf3VH4VgpZlTbFYDDVcJcOuFUZR+lcCucX3tEdDA9Gll2plCll2pgWUyK4zTIbmBSvZu28bxEu0ezE0e5m77xPES7R7MQNkAAAAAAAAAAAAAAAAAAA5tlm0YXpt1VnSTmuWbk4Xpt1Vgc0RkjFGSYEsSaBBEmgwJ4Etj+K+vX+IiGBJN/E/ir20BaiWaWVIss0gejSXamUKWXamBaTIL2SJkFzAp3M3neF4iXaPZiaHcze94Hk8u0ezEDZgAAAAAAAAAAAAAAAAAAOa5ZtGF6bdVZ0o5rlm0YXpt1Vgc0RkjFH1ASRJokKZJECeJLLkPrV7aIYks+Q+tXtoCdMtUMpxZapYHoUsvVM8+ku1MC0mV7mSpkF7ApXs33J/5PLtHsxNAuZv2T3yefavZiBtAAAAAAAAAAAAAAAAAAAHNcs2jC9Nuqs6Uc1yzaML026qwOaJGSMUZJgZokiRmcQJosklyX1q9tEMCX9B9avbiBPFlmplOLLVQHoUsu1MoVMu1AWSC5kiZDewKNzOgZO/J59q9mJz25nQcnXk0+1ezEDagAAAAAAAAAAAAAAAAAAOa5ZtGF6bdVZ0o5rlm0YXpt1Vgc0R9RjEzQGaMomKMkgJIkq5EutDbRDEmXIl0w20BJFlikqxZYpYHo0su1MoVFypgWUyC9kpBewKN7Oh5OX82n2r2YnOrmdEyb+TT7V7MQNsAAAAAAAAAAAAAAAAAAA5tlm0YXpt1VnSTmuWbRhem3VWBzRGRgjOIGaMkYJGaAyRPHky6YbaIUTV8mX8O2gCZZqKqLFTA9Cpl2plCll2sCwiC9kqIL2BRuOjZNvJpdq9mJze9nR8mvk0+1lsxA20AAAAAAAAAAAAAAAAAADmuWZcWF6bdVZ0oq7o7n13wddsVKL0pgfnRJ+YzUX5jsscnO560U5uji9h98He5/Nd4HG0n5u4ySfmOxeDvc/mu/+w8He5/Nd4VyBImr4oyz8XIzdPDWY6z4O9z+a7z54Otz+a7wjk2YsUpnUfB1ufzXePB3ufzXeFc7pTLtaN38HW5/Nd48HWA5rvCNPzFe5G8eDrAc0/SPB1ufzXeBza86Tk08ll2stmB9jk8wCaaraa80sxtFFMYRUYpJJZkl9QEgAAAAAAAAAAAAD//Z',
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
        imageSrc: 'data:image/jpeg;base64,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',
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
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnw-sAe2fkgqXe-5Qv3OoSHIObHw7CiKXWVw&s',
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
        imageSrc: 'data:image/jpeg;base64,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',
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
    imageSrc: 'data:image/jpeg;base64,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',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    cart: 'Add to Cart',
    order:"Order Now",
},
    // More products...
];

const RefrigeratorsComponent = ({ handleAddToCart }) => {
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
export default RefrigeratorsComponent
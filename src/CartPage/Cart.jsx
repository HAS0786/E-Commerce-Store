import React from "react";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className=" z-30  right-4 bg-gray-500 p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="border-b flex justify-between text-center align-middle border-gray-300 mb-2 pb-2"
          >
            <div>
              <div className="flex">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-36 h-40vh object-cover"
                />
              </div>
              <div className="border-3 border-gray-700">
                <p className="text-gray-500 text-2xl font-bold">
                    Name:::{item.name}</p>
                <p className="text-gray-950 text-xl font-semibold">
                Color:::  {item.color}
                </p>
                <p className="text-gray-300 text-3xl font-bold">
                    Quantity:::{item.count}</p>
                <p className="text-gray-950 text-xl font-bold">
                    Price:::{item.price}</p>
              </div>
            </div>
            <div>
              <button
                className="p-3 bg-slate-700 text-gray-300 rounded-sm"
                onClick={() => handleRemoveFromCart(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

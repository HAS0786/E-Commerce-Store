import React, { useContext, useState } from "react";
import  { AuthThemes } from "../AuthTheme/ThemeContext";
import  { useRef } from 'react';

import emailjs from '@emailjs/browser';

const Orderform = () => {
  const form = useRef();


  const { themes } = useContext(AuthThemes);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [product, setproduct] = useState("");
  const [quantity, setquantity] = useState(0);


 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n2aa2e9', 'template_3kc0wgh', form.current, {
        publicKey: 'FwZ398-oASn9YqayU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setName("")
      setAddress("")
      setNumber(0)
      setproduct("")
      setquantity(0)
  };

  return (
    <div
      className={`min-h-screen p-4 flex items-center justify-center  ${
        themes === "dark"
          ? "bg-gray-800 text-gray-600"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <form
        ref={form} onSubmit={sendEmail}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Form</h2>
        <div className="mb-4">
          <label className="block  mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Enter your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            placeholder="Enter your Phone Number"
            name="user_phone"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2"
          htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter your Address"
            required
            name="user_address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>
         <div className="mb-4">
          <label className="block text-gray-700 mb-2"
          htmlFor="address">
            Product
          </label>
          <input type="text"
          name="product_name"
          value={product}
          placeholder="Enter the Product Name"
          onChange={(e)=>setproduct(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="mb-4">
          <label className="block text-gray-700 mb-2"
          htmlFor="address">
            Quantity
          </label>
          <input type="number" name="quantity_of_Product" id=""
          value={quantity}
          onChange={(e)=>setquantity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"  value="Send"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Orderform;


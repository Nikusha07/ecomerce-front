// Cart.js

import React from "react";

const Cart = ({ cart, removeFromCart, totalPrice }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px] gap-6 border-t border-gray-200 py-6">
      {cart.map((item) => (
        <div key={item.cartId} className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full max-xl:max-w-xl mx-auto">
          <div className="img-box">
            <img src={item.images[0]} alt="Product" className="xl:w-[140px]" />
          </div>
          <div className="pro-data max-w-sm text-center lg:text-left">
            <h5 className="font-semibold text-xl leading-8 text-black">{item.title}</h5>
            <p className="font-normal text-lg leading-8 text-gray-500 my-2">{item.category}</p>
            <h6 className="font-medium text-lg leading-8 text-indigo-600">${item.price.toFixed(2)}</h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <button className="group rounded-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => removeFromCart(item.cartId)}>
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M16.5 11H5.5" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M16.5 11H5.5" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" value={1} readOnly />
              <button className="group rounded-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M11 5.5V16.5M16.5 11H5.5" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M11 5.5V16.5M16.5 11H5.5" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9">${item.price.toFixed(2)}</h6>
          </div>
        </div>
      ))}
      <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
          <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
          <h6 className="font-semibold text-xl leading-8 text-gray-900">${totalPrice.toFixed(2)}</h6>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-6 border-b border-gray-200">
          <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
          <h6 className="font-semibold text-xl leading-8 text-gray-900">$15.00</h6>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between py-6">
          <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
          <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${(totalPrice + 15).toFixed(2)}</h6>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
        <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
          <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
          Continue to Payment
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
            <path d="M8.75324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;

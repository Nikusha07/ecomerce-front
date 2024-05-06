import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DolarIcon } from "@/public/icons/dolarIcon";
import Slider from "react-slick";

export const NewProducts = ({ ProductsList }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const { _id, title, price, category, images } = product; // Destructure the product object
    setCart([...cart, { _id, title, price, category, images, cartId: Date.now() }]); // Include the image property when adding to cart
  };
  

  const removeFromCart = (cartIdToRemove) => {
    const updatedCart = cart.filter(item => item.cartId !== cartIdToRemove);
    setCart(updatedCart);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);

  return (
    <>
      <section className="flex flex-wrap mt-[20px] gap-3 justify-center">
        {ProductsList.map((product) => (
          <div key={product._id} className="w-[200px] p-[10px] cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-md">
            <div className="bg-[#d9ceff] w-[100%] h-[100%] flex flex-col justify-between p-[5px] rounded-md">
              <div>
                <h1 className="text-[14px] font-[600] text-[#6b04fd] roboto-bold">{product.title}</h1>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                {product.images.length > 1 ? (
                  <Slider {...settings}>
                    {product.images.map((image, index) => (
                      <div key={index}>
                        <img className="transform transition-transform duration-300  hover:scale-150 " src={image} alt={`${product.name} - ${index}`} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img className="transform transition-transform duration-300 hover:scale-150" src={product.images[0]} alt={product.name} />
                )}
              </div>
              <div className="py-[3px] px-[3px]">
                <p className="text-[15px] pt-[20px]">{product.description}</p>
                <p className="flex gap-1 font-[500]">
                  Price: {product.price}
                  <DolarIcon className="w-5" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
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
    </>
  );
};

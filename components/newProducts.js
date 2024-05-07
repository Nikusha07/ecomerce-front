import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DolarIcon } from "@/public/icons/dolarIcon";
import Slider from "react-slick";
import Cart from "./Cart";

export const NewProducts = ({ ProductsList }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const { _id, title, price, category, images } = product;
    setCart([...cart, { _id, title, price, category, images, cartId: Date.now() }]);
  };

  const removeFromCart = (cartIdToRemove) => {
    const updatedCart = cart.filter((item) => item.cartId !== cartIdToRemove);
    setCart(updatedCart);
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
      {/* Use the Cart component */}
      <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />
    </>
  );
};

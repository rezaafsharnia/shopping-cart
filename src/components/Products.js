import React, { useContext, useEffect, useState } from "react";
import { products } from "../data.js";
import { BsFillCartPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useCartActions } from "../Providers/CartProvider.js";

function Products() {
  const dispatch = useCartActions();
  const addToCartHandler = (product) => {
    toast.success(`${product.name} Added to Cart.`, {
      position: "bottom-right",
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <main>
      <h1 className="font-bold text-2xl my-2">Shoes</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-8">
        {products.map((product) => {
          return (
            <div
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-500"
              key={product.id}
            >
              <div className="h-32 md:h-48 overflow-hidden">
                <img
                  className="object-center"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="py-2 px-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-lg font-semibold ml-1">
                    {product.name}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-2xl font-bold text-purple-700">
                    {product.price}$
                  </p>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="flex justify-between items-center bg-purple-700 text-white py-1 px-4 rounded-full text-sm md:text-base gap-2"
                  >
                    <BsFillCartPlusFill className="hidden md:flex  mb-1" />
                    BuyNow
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;

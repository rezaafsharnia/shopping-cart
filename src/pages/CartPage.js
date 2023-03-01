import React, { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxMinus } from "react-icons/rx";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";

function CartPage() {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  // const { totalPrice } = useContext(CartContext);
  // console.log(setItems);

  const addHandler = (id) => {
    const findedItem = cart.find((item) => item.id === id);
    dispatch({
      type: "ADD_TO_CART",
      // payload: findedItem,
    });
  };

  const decrementHandler = (item) => {
    dispatch({
      type: "DECREMENT_ITEM",
      payload: item,
    });
  };

  // const deleteHandler = (id) => {
  //   const filteredItems = items.filter((item) => item.id !== id);
  //   setItems(filteredItems);
  // };

  return (
    <Layout>
      <div className="bg-zinc-100 gap-4 flex justify-between items-start min-h-screen py-8 px-2 md:px-14">
        <div className="bg-white grow rounded-3xl shadow-xl py-2 px-4">
          <div className="my-2">
            <h3 className="text-zinc-400 font-extralight text-sm">
              Cart details
            </h3>
          </div>
          {cart.length ? (
            cart.map((item) => {
              return (
                <div
                  className="flex gap-4 items-center py-2 px-4"
                  key={item.id}
                >
                  <div className="rounded-xl object-cover w-36 h-16 overflow-hidden">
                    <img className="w-full" src={item.image} alt={item.name} />
                  </div>
                  <div className="min-w-[150px] flex  flex-col flex-shrink-0">
                    <h3 className="text-lg text-purple-700">{item.name}</h3>
                    <h3 className="text-md text-zinc-400">$ {item.price}</h3>
                  </div>
                  <div className="w-full flex  justify-center items-center gap-2">
                    <button
                      onClick={() => addHandler(item.id)}
                      className="bg-zinc-100  w-4 h-4 flex justify-center items-center text-lg rounded-full"
                    >
                      <IoIosAdd />
                    </button>
                    <p className="flex bg-zinc-100 w-8 h-8 rounded-full  justify-center items-center">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => decrementHandler(item)}
                      className="bg-zinc-100  w-4 h-4 flex justify-center items-center text-lg rounded-full"
                    >
                      <RxMinus />
                    </button>
                  </div>
                  <div className="">{item.price * item.quantity}</div>
                  <div>
                    {/* <button
                      onClick={() => deleteHandler(item.id)}
                      className="bg-zinc-100  w-4 h-4 flex justify-center items-center text-lg rounded-full"
                    >
                      <IoCloseOutline />
                    </button> */}
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1 className="flex justify-center my-16 text-red-500">
                Your Cart is empty!
              </h1>
              <div className="flex justify-center items-center mb-4">
                <Link to={"/"}>
                  <button className=" bg-zinc-500 py-2 px-8 rounded-xl text-zinc-200 hover:scale-105 transition duration-500">
                    go to shop
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white rounded-3xl min-h-[180px] shadow-xl py-2 px-4 lg:min-w-[350px] md:min-w-[250px] ">
          <div className="my-2">
            <h3 className="text-zinc-400 font-extralight text-sm">
              Cost details
            </h3>
          </div>
          <div>
            <div className="font-bold text-zinc-600 text-2xl">Total Price</div>
            <div className="text-purple-700 text-5xl text-right p-4 font-extrabold">
              $ {total}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;

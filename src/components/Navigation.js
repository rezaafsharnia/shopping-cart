import React, { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";

function Navigation() {
  const { cart } = useCart();
  return (
    <header className="flex py-2 items-center shadow-md px-6 md:px-16 lg:px-28">
      <div className="w-28 md:w-48 ">
        <Link to={"/"}>
          <img
            className="w-full"
            src="https://cdn.dribbble.com/users/64815/screenshots/1518220/attachments/229248/shop_logo_big.png?compress=1&resize=400x300&vertical=top"
            alt="logo"
          />
        </Link>
      </div>
      <nav className="hidden w-full md:flex lg:flex lg:ml-16 md:ml-16">
        <ul className="flex gap-8">
          <li>
            <NavLink
              className="py-2 transition duration-500 ease-in-out  px-8 rounded-lg hover:ring-gray-300 hover:ring-1 "
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="py-2 transition duration-500 px-8 ease-in-out rounded-lg hover:ring-gray-300 hover:ring-1 "
              to={"/cart"}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex w-full justify-end items-center">
        <Link to={"/cart"}>
          <div className="relative">
            <IoBagOutline className="text-2xl" />
            <p className=" text-[12px] absolute top-0 left-3 text-white  w-2 h-2 p-2 bg-green-500 flex justify-center items-center rounded-full">
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;

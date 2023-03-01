import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Layout from "../Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Counter Mounting!");
  }, [counter]);

  return (
    <Layout>
      <div className="py-8 px-2 max-w-[1070px] mx-auto">
        <ToastContainer />
        <Products />
      </div>
    </Layout>
  );
}

export default HomePage;

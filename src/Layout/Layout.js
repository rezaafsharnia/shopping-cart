import React from "react";
import Navigation from "../components/Navigation";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;

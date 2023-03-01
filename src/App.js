import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/cart"} element={<CartPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

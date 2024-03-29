import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "./App.css";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);;

  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose = {hideCartHandler} />}
      <Header onShow = {showCartHandler} />
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

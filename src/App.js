import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
import "./App.css";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);;

  const hideCartHandler = () => setShowCart(false);


  return (
    <Fragment>
      {showCart && <Cart onClickHideCart = {hideCartHandler} />}
      <Header onClickShowCart = {showCartHandler} />
      <MealsSummary />
      <MealsList items = {DUMMY_MEALS} />
    </Fragment>
  );
}

export default App;

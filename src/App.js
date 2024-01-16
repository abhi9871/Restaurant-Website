import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;

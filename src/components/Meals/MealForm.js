import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import "./MealForm.css";

const MealForm = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const submitHandler = () => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: +amountInputRef.current.value,
      price: +meal.price,
    });
  };

  return (
    <div className="quantity-form d-flex flex-column">
      <div className="add-order mb-1">
        <label htmlFor={"quantity_" + meal.id} className="fw-bold">
          Amount
        </label>
        <input
          type="number"
          id={"quantity_" + meal.id}
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          className="ms-2"
          ref={amountInputRef}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn rounded-5 text-white fw-bold px-4"
          onClick={submitHandler}
        >
          +Add
        </button>
      </div>
    </div>
  );
};

export default MealForm;

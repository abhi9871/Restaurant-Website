import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [meals, setMeals] = useState([]);

    const addItemToCartHandler = (item) => {
        setMeals((prevItems) => {
            const existingItemIndex = prevItems.findIndex((meal) => meal.id === item.id);
            if(existingItemIndex === -1){
               return [...prevItems, item];
            } else {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].amount += item.amount;
                return updatedItems;
            }
        });
    }

    const totalAmountHandler = (meals) => {
        if (meals.length === 0) {
            return 0; // Return 0 if the meals array is empty
        }
        const totalAmount = meals.reduce((curr, meal) => curr + (meal.price * meal.amount), 0);
        return totalAmount;
    }

    // const removeItemFromCartHandler = () => {
        
    // }

    const cartContext = {
        items: meals,
        totalAmount: totalAmountHandler(meals),
        addItem: addItemToCartHandler
        // removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
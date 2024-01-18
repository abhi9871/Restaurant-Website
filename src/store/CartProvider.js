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

    const removeItemFromCartHandler = (id) => {
        setMeals((prevMeals) => {
            const existingItemIndex = prevMeals.findIndex((meal) => meal.id === id);
            const updatedItem = [...prevMeals];
            if(updatedItem[existingItemIndex].amount === 1){
                updatedItem.splice(existingItemIndex, 1);
            }
            else{
                updatedItem[existingItemIndex].amount -= 1;
            }
            return updatedItem;
        });
    }

    const increasedQuantityIntoCartHandler = (id) => {
        setMeals((prevMeals) => {
            const existingItemIndex = prevMeals.findIndex((meal) => meal.id === id);
            const updatedItem = [...prevMeals];
            updatedItem[existingItemIndex].amount += 1;
            return updatedItem;
        })
    }

    const cartContext = {
        items: meals,
        totalAmount: totalAmountHandler(meals),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        increasedQuantity: increasedQuantityIntoCartHandler
    };

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
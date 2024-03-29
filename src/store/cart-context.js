import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    increasedQuantity: () => {}
});

export default CartContext;
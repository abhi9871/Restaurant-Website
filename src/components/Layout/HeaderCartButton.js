import { useContext } from "react";
import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import CartContext from '../../store/cart-context';
import './HeaderCartButton.css';

const HeaderCartButton = ({showCartOnClick}) => {
    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((currValue, item) => currValue + item.amount, 0);

    return (
        <Button className='flex rounded-5 px-4 py-2 fw-bold align-items-center border-0 cart-button m-2' onClick={showCartOnClick}>
            <ShoppingCart fill="white" size={20} />
            <span className="ms-2">Your Cart</span>
            <span className="badge rounded-5 px-2 ms-3 cart-count">{numOfCartItems}</span>
            </Button>
    )
}

export default HeaderCartButton;
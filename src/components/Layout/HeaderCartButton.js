import { ShoppingCart, Menu } from "react-feather";
import { Button } from "react-bootstrap";
import './HeaderCartButton.css';

const HeaderCartButton = () => {
    return (
        <Button className='flex rounded-5 px-4 py-2 fw-bold align-items-center border-0 cart-button m-2'>
            <ShoppingCart fill="white" size={20} />
            <span className="ms-2">Your Cart</span>
            <span className="badge rounded-5 px-2 ms-3 cart-count">0</span>
            </Button>
    )
}

export default HeaderCartButton;
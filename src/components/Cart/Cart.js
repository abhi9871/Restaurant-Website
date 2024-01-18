import { Fragment, createFactory, useContext } from 'react';
import ReactDOM from 'react-dom';
import {Card, Button} from 'react-bootstrap';
import CartContext from '../../store/cart-context';
import './Cart.css';

const CartModal = ({onClose}) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <div className="overlay" onClick={onClose}></div>
      <div className='container custom-card-container'>
    <Card>
      {cartCtx.items.map((meal) => {
          return <Card.Body className='d-flex justify-content-between align-items-center'>
          <div className='d-flex flex-column'>
            <div className='fw-bold mb-2'>{meal.name}</div>
            <div>
              <span className='fw-bold text-danger'>${meal.price}</span>
              <span className='border rounded px-2 py-1 fw-bold ms-5'>x {meal.amount}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Button className='m-1 bg-transparent border-none border-danger-subtle text-danger fw-bold'>-</Button>
            <Button className='ms-1 bg-transparent border-none border-danger-subtle text-danger fw-bold'>+</Button>
          </div>
        </Card.Body>
      })}
    
    <Card.Footer className='d-block'>
      <div className='d-flex justify-content-between'>
        <h5>Total Amount</h5>
        <h5>${cartCtx.totalAmount}</h5>
      </div>
      <div className='d-inline-block float-end'>
        <Button className='close-button rounded-pill px-4 fw-bold me-1 bg-transparent border-none border-danger-subtle text-danger' onClick={onClose}>Close</Button>
        <Button className='order-button rounded-pill border px-4 fw-bold ms-1'>Order</Button>
      </div>
    </Card.Footer>
  </Card>
  </div>
  </Fragment>
  )
}

const Cart = ({onClose}) => {
    return (
      <Fragment>
      {ReactDOM.createPortal(<CartModal onClose = {onClose} />, document.getElementById('cart-model'))}
      </Fragment>
    )
}

export default Cart;
import {Modal, Button} from 'react-bootstrap';
import './Cart.css';

const CartItem = () => {
    return (
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Body className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
                <div className='fw-bold mb-2'>
                    Schnitzel
                </div>
                <div>
                <span className='fw-bold text-danger'>$16.5</span>
                <span className='border rounded px-2 py-1 fw-bold ms-5'>x 2</span>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <Button className='m-1 bg-transparent border-none  border-danger-subtle text-danger fw-bold'>-</Button>
            <Button className='ms-1 bg-transparent border-none border-danger-subtle text-danger fw-bold'>+</Button>
            </div>
        </Modal.Body>
        <Modal.Footer className='d-block'>
            <div className='d-flex justify-content-between'>
                <h5>Total Amount</h5>
                <h5>$33.00</h5>
            </div>
            <div className='d-inline-block float-end'>
          <Button className='rounded-pill px-4 fw-bold me-1 bg-transparent border-none  border-danger-subtle text-danger'>Close</Button>
          <Button className='order-button rounded-pill border px-4 fw-bold ms-1'>Order</Button>
          </div>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    )
}

export default CartItem;
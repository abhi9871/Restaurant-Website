import { Card, CardBody } from "react-bootstrap";
import "./MealsList.css";

const MealsList = (props) => {
  return (
    <section className="container mt-4 d-flex justify-content-center">
      <Card className="meals-list w-75">
        {props.items.map((meal) => {
          return (
            <div key={meal.id}>
            <CardBody className="d-flex align-items-center">
            <div className="items-details">
              <div className="fw-bold">{meal.name} </div>
              <div className="fst-italic">{meal.description}</div>
              <div className="price fw-bold">${meal.price}</div>
            </div>
            <div className="quantity-form d-flex flex-column">
                <div className="add-order mb-1">
                <label htmlFor='quantity' className="fw-bold">Amount</label>
                <input type='number' id="quantity" className="ms-2" />
                </div>
                <div className="d-flex justify-content-end">
                <button type="button" className="btn rounded-5 text-white fw-bold px-4">+Add</button>
                </div>
            </div>
            </CardBody>
            <hr className="mx-3" />
            </div>
          );
        })}
      </Card>
    </section>
  );
};

export default MealsList;

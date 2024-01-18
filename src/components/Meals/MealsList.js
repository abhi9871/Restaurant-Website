import { Card, CardBody } from "react-bootstrap";
import MealForm from './MealForm';
import "./MealsList.css";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const MealsList = () => {
  return (
    <section className="container mt-4 d-flex justify-content-center">
      <Card className="meals-list w-75">
        {DUMMY_MEALS.map((meal) => {
          const price = `$${meal.price.toFixed(2)}`;
          return (
            <div key={meal.id}>
            <CardBody className="d-flex align-items-center">
            <div className="items-details">
              <div className="fw-bold">{meal.name}</div>
              <div className="fst-italic">{meal.description}</div>
              <div className="price fw-bold">{price}</div>
            </div>
            <MealForm id={meal.id} meal = {meal} />
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

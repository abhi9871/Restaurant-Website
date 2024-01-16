import { Card, CardBody } from "react-bootstrap";
import "./MealsList.css";

const MealsList = (props) => {
  return (
    <section className="container mt-4 d-flex justify-content-center">
      <Card className="meals-list w-75">
        {props.items.map((meal) => {
          return (
            <CardBody>
              <div className="fw-bold">{meal.name} </div>
              <div className="fst-italic">{meal.description}</div>
              <div className="price fw-bold">${meal.price}</div>
              <hr />
            </CardBody>
          );
        })}
      </Card>
    </section>
  );
};

export default MealsList;

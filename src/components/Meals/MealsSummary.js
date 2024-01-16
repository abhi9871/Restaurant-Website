import Card from "react-bootstrap/Card";
import './MealsSummary.css'

const MealsSummary = () => {
  return (
    <section className="container summary">
      <Card className="card text-center d-flex justify-content-center m-auto shadow-lg bg-dark text-white w-50">
        <Card.Body>
        <Card.Title className="fw-bold fs-3 mb-4">Delicious Food, Delivered To You</Card.Title>
          <Card.Text>
          <p>Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
        </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default MealsSummary;

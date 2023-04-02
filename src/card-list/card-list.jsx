//import cars from "../dbTest.json";
import Card from "./card";
import Card2 from "./card2";
<<<<<<< HEAD:src/card-list/card-list.jsx
import "./card-list.scss";
=======
import "./card-list.css";
>>>>>>> c47c8b2566f03233da6ee8da6addeb20e2a66dd1:src/card/card-list.jsx

const CardList = ({ cars }) => (
  <div className="card-list">
    {cars.map((car) => {
      return (
        <>
          {/* <Card key={car.id} car={car} /> */}
          <Card2 key={car.id} car={car} />
        </>
      );
    })}
  </div>
);

export default CardList;

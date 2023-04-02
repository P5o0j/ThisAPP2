//import cars from "../dbTest.json";
import Card from "../card/card";
import Card2 from "../card2/card2";

import "./card-list.scss";

const CardList = ({ cars }) => (
  <div className="card-list">
    {cars.map((car) => {
      return (
        <>
          <Card key={car.id} car={car} />
          {/* <Card2 key={car.id} car={car} /> */}
        </>
      );
    })}
  </div>
);

export default CardList;

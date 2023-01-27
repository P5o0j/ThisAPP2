import data from ".../dbTest.json";
import Card from "./card";

const CardList = ({ data }) => (
  <div className="card-list">
    {data.map((car) => {
      return <Card key={car.id} car={car} />;
    })}
  </div>
);

export default CardList;

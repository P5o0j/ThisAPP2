import Card from "./card";

const CardList = ({ cars }) => (
  <div className="card-list">
    {cars.map((car) => {
      return <Card key={car.id} car={car} />;
    })}
  </div>
);

export default CardList;

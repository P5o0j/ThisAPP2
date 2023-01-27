import "./card.css";

const Card = ({ car }) => {
  const { id, vrn, lastName } = car;
  return (
    <div className="card-container" key={id}>
      <h2>{vrn}</h2>
      <p>{lastName}</p>
    </div>
  );
};

export default Card;

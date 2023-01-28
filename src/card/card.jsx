import "./card.css";

const Card = ({ car }) => {
  const { id, vrn, owner } = car;

  return (
    <div className="card-container" key={id}>
      <h2>{vrn.toLocaleUpperCase()}</h2>
      <p>{owner.lastName}</p>
    </div>
  );
};

export default Card;

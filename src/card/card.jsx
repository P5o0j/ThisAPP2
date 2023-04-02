import "./card.scss";
import { Link } from "@chakra-ui/react";
import CardDetail from "../card-detail/card-detail";

const Card = ({ car }) => {
  const { id, vrn, owner } = car;
  const clickHandler = (props) => {
    <CardDetail car2={car} />;
    console.log("click");
  };

  return (
    <div className="card-container" key={id}>
      <h2>{vrn.toLocaleUpperCase()}</h2>
      <p>{owner.lastName}</p>
      <hr />
      <button
        type="button"
        onClick={clickHandler()}
        className="button"
        placeholder="Det"
      >
        Details
      </button>
    </div>
  );
};

export default Card;

import { useState } from "react";
import "./card.scss";
import { Link } from "@chakra-ui/react";
import CardDetail from "../card-detail/card-detail";
import CarDetail from "../car-detail/car-detail.component";

const Card = ({ car }) => {
  const { id, vrn, owner } = car;
  const clickHandler = (props) => {
    <CardDetail car2={car} />;
    console.log("click");
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container" key={id}>
      <h2>{vrn.toLocaleUpperCase()}</h2>
      <p>{owner.lastName}</p>
      <hr />
      {/* <button
        type="button"
        onClick={clickHandler()}
        className="button"
        placeholder="Det"
      >
        Details
      </button> */}
      <input type="button" value="Details" onClick={togglePopup} />
      {isOpen && <CarDetail car2={car} handleClose={togglePopup} />}
    </div>
  );
};

export default Card;

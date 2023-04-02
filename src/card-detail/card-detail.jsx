import "./card-detail.styles.scss";

const CardDetail = ({ car2 }) => {
  return (
    <div className="card-detail">
      <p>{car2.vrn}</p>
      <p>{car2.make}</p>
    </div>
  );
};

export default CardDetail;

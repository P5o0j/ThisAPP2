import "./car-detail.style.scss";

const CarDetail = (props, ...car2) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <p>test</p>
        {car2.vrn}
      </div>
    </div>
  );
};

export default CarDetail;

import "./FeatureCard.css";

const FeatureCard = (props) => {
  return (
    <div
      className="feature-item d-flex justify-content-between"
   
    >
      <div className="info d-flex align-items-center position-relative">
        <div className="animate__fadeIn wow" data-wow-offset="350">
          <h3 className="text-white align-center">{props.title}</h3>
          <p className="text-white-50">{props.content}</p>
        </div>
      </div>

      <div
        className="img-box d-flex justify-content-center wow animate__fadeInDown"
        data-wow-offset="350"
      >
        <img src={props.img} />
      </div>
    </div>
  );
};

export default FeatureCard;

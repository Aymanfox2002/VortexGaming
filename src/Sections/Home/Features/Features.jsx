import "./Features.css";
import FeaturesData from "../../../Data/FeaturesData";
import { FeatureCard } from "../../../Components/index";
const Features = () => {
  let cards = FeaturesData.map((card, index) => (
    <FeatureCard
      key={index}
      title={card.title}
      content={card.content}
      img={card.img}
    />
  ));

  return (
    <section className="features container">
      <h2 className="h1">Features</h2>
      <div className="feature-list">{cards}</div>
    </section>
  );
};

export default Features;

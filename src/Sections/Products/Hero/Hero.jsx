import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="layout">
        <div className="info">
          <p className="text-white-50">Welcome to our store 👋</p>
          <h1 className="hero-title h1 mb-3">Discover Our <br /> <span>Exclusive</span> Collection</h1>
          <p className="text-white-50">
            From the latest releases to classic favorites, we have something for
            everyone. Explore our products now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

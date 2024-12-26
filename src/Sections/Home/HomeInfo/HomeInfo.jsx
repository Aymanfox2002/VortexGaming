import "./HomeInfo.css";
import HomeInfoImg from "../../../Assits/images/HomeInfo.png";
const HomeInfo = () => {
  return (
    <section className="HomeInfo pt-pb">
      <div className="container d-flex">
        <div className="box w-50">
          <h2 className="mb-4 h1">
            Get in Touch with Us <span>Today</span> to Learn More
          </h2>
          <p className="text-white-50 mb-5">
            Have questions or need assistance? We're here to help. Reach out to
            us and we'll get back to you as soon as possible.
          </p>
          <form>
            <input
              type="text"
              className="form-control text-white-50"
              placeholder="Your Email"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="banner d-flex align-items-center justify-content-center">
          <div className="img-box w-50 wow animate__fadeInDown"  data-wow-delay="400">
            <img className="img-fluid shadow-lg" src={HomeInfoImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;

import "./MainBanner.css";
import hero_1 from "../../../Assits/images/hero_1.png";
import hero_2 from "../../../Assits/images/hero_2.png";
import { FaSistrix } from "react-icons/fa6";

const MainBanner = () => {
  return (
    <div className="main-banner position-relative wow animate__fadeInUp">
      <div className="info w-100 d-flex text-center align-items-center justify-content-center position-absolute">
        <div className="box text-white-50">
          <p>WELCOME TO VORTEX</p>
          <h1 className="main-title">
            THE BEST <span>GAMING</span> SITE EVER!
          </h1>
          <p className="mt-4 mb-5">
            The ultimate gaming store where cutting-edge technology meets
            unparalleled gaming experiences.
            <br /> Whether you're a casual gamer or a hardcore enthusiast,
            Voretex offers a vast selection of the latest games,
            <br /> consoles, and accessories to elevate your play.
          </p>
          <div className="input-group input-group-lg">
            <span
              className="input-group-text text-white-50"
              id="inputGroup-sizing-lg"
            >
              <FaSistrix />
            </span>
            <input
              type="text"
              className="form-control text-white-50"
              placeholder="e.i Fallout 4"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div className="hero_1 position-absolute" aria-hidden="true">
            <img className="img-fluid" alt="" src={hero_1} />
          </div>

          <div className="hero_2 position-absolute" aria-hidden="true">
            <img className="img-fluid" alt="" src={hero_2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

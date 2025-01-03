import "./TopCategories.css";
import { MainTitle } from "../../../Components/index";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import TopCategoriesData from "../../../Data/TopCategoriesData";

const TopCategories = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 20,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      reverse: true,
      scale: 1.08,
    });
  }, []);

  return (
    <section aria-label="Top Categories" className="TopCategories pt-pb">
      <div className="container">
        <MainTitle title="Top Categories" buttonInfo="VIEW ALL" />

        <div className="categories-box d-flex justify-content-around flex-wrap">
          {TopCategoriesData.map((ele, index) => (
            <div
              className="p-2 d-flex align-items-center justify-content-center wow animate__fadeInDown"
              data-wow-offset="200"
              data-wow-delay={`.${index}s`}
              key={index}
            >
              <a href="#" className="categorie mb-3 tilt-container tilt text-center align-center">
                <img className="img-fluid" src={ele.img} alt={ele.alt} /> 
                <div className="info">
                  {ele.icon}
                  <h3 className="mt-4">{ele.title}</h3>
                </div>
                <div className="sticker">
                {ele.icon}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

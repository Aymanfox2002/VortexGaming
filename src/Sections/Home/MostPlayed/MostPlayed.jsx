import "./MostPlayed.css";
import { MainTitle, TagButton } from "../../../Components/index";
import GamesData from "../../../Data/GamesData";
const MostPlayed = () => {
 

  const MostPlayedArr = GamesData.filter((ele) =>
    ele.hasOwnProperty("mostPlayed")
  );

  return (
    <section aria-label="Most Played" className="MostPlayed pt-pb">
      <div className="container">
        <MainTitle title="Most Played" />

        <div className="cards-box d-flex justify-content-around row">
          {MostPlayedArr.map((ele, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
            href="#"
              className="single-card shadow p-0 pb-3 col-12 col-md-4 m-3  wow animate__fadeIn"
              data-wow-offset="200"
              data-wow-delay={`.${index}s`}
              key={index}
            >
              <div className="box-img mb-2">
                <img className="img-fluid" src={ele.img} alt={ele.alt} />
              </div>
              <div className="info ps-3 pe-3">
                <h3 className="text-center text-light">{ele.title}</h3>
                <div className="tags text-center mb-3">
                  {ele.game_type.map((tag, index) => (
                    <TagButton key={index}>{tag}</TagButton>
                  ))}
                </div>
                <p className="text-white-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  harum corporis odio laborum a magni adipisci excepturi illum
                  eaque quae.
                </p>

                <div className="d-flex">
                  <a href="#" className="explor ">
                    Explore
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPlayed;

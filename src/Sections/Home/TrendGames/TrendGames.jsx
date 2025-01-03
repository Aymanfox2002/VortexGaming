import "./TrendGames.css";
import {
  FreeButton,
  MainTitle,
  PriceBeforeButton,
  PriceButton,
  TagButton,
} from "../../../Components/index";
import GamesData from "../../../Data/GamesData";
import { FaHeart } from "react-icons/fa6";

// Swiper files
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TrendGames = () => {
  let trendArr = GamesData.slice(0, 10);
  return (
    <section aria-label="Trending Games" className="trendGames position-relative">
      <div className="layout position-absolute pt-pb w-100 h-100">
        <div className="container">
          <MainTitle title="Trending Games" buttonInfo="VIEW ALL" />
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {trendArr.map((ele, index) => (
              <SwiperSlide key={index}>
                <a href="#" className="slide-box d-flex align-items-end">
                  <img src={ele.img} alt={ele.alt} />
                  <FaHeart className="wish-icon" />
                  <div className="info w-100">
                    <h3 className="title h4">{ele.title}</h3>
                    <div className="game-type mb-3">
                      {ele.game_type.map((type, index2) => (
                        <span className="me-3" key={index2}>
                          {/* {type} */}
                          <TagButton>{type}</TagButton>
                        </span>
                      ))}
                    </div>
                    <div className="discont-tape d-flex justify-content-between">
                      {ele.discount > 0 ? (
                        <div>
                          <PriceButton>${ele.discount - 0.1} USD</PriceButton>
                          <PriceBeforeButton>
                            <del>${ele.price_before_discount}</del>
                          </PriceBeforeButton>
                        </div>
                      ) : (
                        <FreeButton>FREE</FreeButton>
                      )}
                      <span className="date text-white-50">{ele.date}</span>
                    </div>
                  </div>
                  <div className="outer-title p-3">
                    <h3 className="h4">{ele.title}</h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendGames;

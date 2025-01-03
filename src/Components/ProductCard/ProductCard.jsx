import {
  FaCartShopping,
  FaDesktop,
  FaHeart,
  FaHeartCirclePlus,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa6";
import {
  FreeButton,
  PriceBeforeButton,
  PriceButton,
  PrimaryButton,
  TagButton,
} from "../Buttons/Buttons";

import "./ProductCard.css";

const ProductCard = (props) => {
  const tags = props.gameType;
  const platformArr = props.platform;

  function convertPlatformsToArr(platformArr) {
    let result = [];
    for (let i = 0; i < platformArr.length; i++) {
      if (platformArr[i] === "PC") {
        result.push(<FaDesktop />);
      }

      if (platformArr[i] === "PS") {
        result.push(<FaPlaystation />);
      }

      if (platformArr[i] === "Xbox") {
        result.push(<FaXbox />);
      }
    }
    return result;
  }

  const platform = convertPlatformsToArr(platformArr);

  return (
    <div className="ProductCard col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="p-4 mb-4">
        <div className="img-box mb-3">
          <img className="img-fluid w-100 h-100" src={props.img} alt="testImg" loading="lazy" />
        </div>
        <div className="prices d-flex justify-content-between mb-3">
          {props.currentPrice !== 0 ? (
            <>
              <PriceButton>${props.currentPrice} USD</PriceButton>
              <PriceBeforeButton>
                <del>${props.priceBefore} USD</del>
              </PriceBeforeButton>
            </>
          ) : (
            <FreeButton>Free</FreeButton>
          )}
        </div>
        <h3 className="mb-2 text-center">{props.title}</h3>
        <div className="platforms text-center mb-3">
          {platform.map((ele, index) => (
            <span className="platform" key={index}>
              {ele}
            </span>
          ))}
        </div>
        <div className="categories mb-3 text-center">
          {tags.map((ele, index) => (
            <TagButton key={index}>{ele}</TagButton>
          ))}
        </div>
        <div className="cart-wish">
          <PrimaryButton icon={<FaCartShopping />} ariaLabel={"Add To Cart"}>Add To Cart</PrimaryButton>
          <PrimaryButton icon={<FaHeartCirclePlus />}>
            <FaHeart />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

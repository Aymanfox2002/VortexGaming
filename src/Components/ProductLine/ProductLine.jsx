import "./ProductLine.css";
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
import { Divider } from "@mui/material";

const ProductLine = (props) => {
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
    <div className="ProductLine col-12 ">
      <div className="p-4 mb-4">
        <div className="left-box d-flex  align-items-center">
          <div className="img-box me-5">
            <img
              className="img-fluid w-100 h-100 rounded float-start"
              src={props.img}
              alt="testImg"
              loading="lazy"
            />
          </div>
          <div>
            {props.currentPrice !== 0 ? (
              <div className="d-flex justify-content-start gap-2">
                <PriceButton>${props.currentPrice} USD</PriceButton>
                <PriceBeforeButton>
                  <del>${props.priceBefore} USD</del>
                </PriceBeforeButton>
              </div>
            ) : (
              <FreeButton>Free</FreeButton>
            )}
           <div className="d-lg-flex align-items-center gap-3 mb-2 mt-3">
             <h3 className="h5">{props.title}</h3>
            <span className="platforms">
              {platform.map((ele, index) => (
                <span key={index}>
                  {ele}
                </span>
              ))}
            </span>
           </div>
            <h4 className="h6 studio white-50">{props.studio}</h4>

            <div className="categories mb-2">
              {tags.map((ele, index) => (
                <TagButton key={index}>{ele}</TagButton>
              ))}
            </div>

            <p className="size text-warning-emphasis">Size: {props.size}</p>
            
            <div className="d-md-none w-100">
              <PrimaryButton icon={<FaCartShopping />} fullWidth={true} >
                Add To Cart
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="right-box d-none d-md-flex flex-column gap-2 justify-content-center">
          <PrimaryButton icon={<FaCartShopping />}>Add To Cart</PrimaryButton>
          <PrimaryButton icon={<FaHeartCirclePlus />}>
            <FaHeart />
          </PrimaryButton>
        </div>
      </div>
      <Divider component="li" />
    </div>
  );
};

export default ProductLine;

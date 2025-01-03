import "./Button.css";
import { FaArrowRight } from "react-icons/fa6";

const PrimaryLink = (props) => {
  return (
    <a className="Primary" href="#">
      <p>{props.children}</p>
      <i>
        <FaArrowRight />
      </i>
    </a>
  );
};

const PrimaryButton = (props) => {
  return (
    <button
      className={`Primary ${props.disabled ? "disabled" : ""} ${
        props.fullWidth ? "w-100" : ""
      } `}
      onClick={props.click}
      disabled={props.disabled}
      aria-label={props.ariaLabel || "button"}
    >
      {props.children}
      <i>{props.icon}</i>
    </button>
  );
};
// Shapes like a buttons but not
const PriceButton = (props) => {
  return (
    <span className="PriceButton" key={props.key}>
      {props.children}
    </span>
  );
};

const FreeButton = (props) => {
  return <span className="free">{props.children}</span>;
};
const PriceBeforeButton = (props) => {
  return <span className="priceBefore">{props.children}</span>;
};

const TagButton = (props) => {
  return <span className="tag">{props.children}</span>;
};

export default PrimaryLink;
export { PrimaryButton };
export { PriceButton };
export { FreeButton };
export { PriceBeforeButton };
export { TagButton };

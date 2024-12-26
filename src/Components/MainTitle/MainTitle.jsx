import {PrimaryLink} from "../index";
import "./MainTitle.css";

const MainTitle = (props) => {
  return (
    <div className="MainTitle d-flex justify-content-between">
      <h2 className="h1">{props.title}</h2>
      {props.buttonInfo && <PrimaryLink>{props.buttonInfo}</PrimaryLink>}
    </div>
  );
};

export default MainTitle;

import category_1 from "../Assits/images/Categories/category_1.jpg";
import category_2 from "../Assits/images/Categories/category_2.jpg";
import category_3 from "../Assits/images/Categories/category_3.jpg";
import category_4 from "../Assits/images/Categories/category_4.jpg";
import category_5 from "../Assits/images/Categories/category_5.jpg";
import category_6 from "../Assits/images/Categories/category_6.jpg";
import {
  GiDrippingSword,
  GiJeweledChalice,
  GiTreasureMap,
  GiCarWheel,
  GiThunderball,
  GiGearHammer,
} from "react-icons/gi";

const TopCategoriesData = [
  {
    img: category_6,
    alt: "Action Category",
    title: "Action",
    icon: <GiDrippingSword className="mt-5" />,
    path: "",
  },
  {
    img: category_3,
    alt: "RPG Category",
    title: "RPG",
    icon: <GiJeweledChalice className="mt-5" />,
    path: "",
  },
  {
    img: category_1,
    alt: "Adventure Category",
    title: "Adventure",
    icon: <GiTreasureMap className="mt-5" />,
    path: "",
  },
  {
    img: category_5,
    alt: "Racing Category",
    title: "Racing",
    icon: <GiCarWheel className="mt-5" />,
    path: "",
  },
  {
    img: category_4,
    alt: "Sports Category",
    title: "Sports",
    icon: <GiThunderball className="mt-5" />,
    path: "",
  },
  {
    img: category_2,
    alt: "Simulation Category",
    title: "Simulation",
    icon: <GiGearHammer className="mt-5" />,
    path: "",
  },
];

export default TopCategoriesData;

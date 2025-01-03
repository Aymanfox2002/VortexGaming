import { Fab } from "@mui/material";
import "./ToTop.css";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {}, 1000); // Adjust the duration as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`move-to-top ${isVisible ? "show" : ""}`}>
      <Fab color="primary" aria-label={"to top"} onClick={scrollToTop}>
        <FaAngleDoubleUp />
      </Fab>
    </div>
  );
};

export default ToTop;

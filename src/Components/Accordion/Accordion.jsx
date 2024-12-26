import React, { useState, useRef } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentRef = useRef(null); // Ref for the panel content

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setHeight(isActive ? "0px" : `${contentRef.current.scrollHeight}px`);
  };

  return (
    <div className="Accordion">
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className="panel"
        style={{
          maxHeight: `${height}`,
          transition: "max-height 0.1s ease-out",
        }}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Accordion;

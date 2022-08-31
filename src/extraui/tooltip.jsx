import React from "react";
import "./tooltip.css";

function Tooltip({ child, text }) {
  return (
    <div className="tooltip">
      {child}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}

export default Tooltip;
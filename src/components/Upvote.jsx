import React from "react";
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg";
import "./Upvote.css";

const Upvote = ({ selected, onToggle }) => {
  // Style for the Upvote component with conditional on its selected state
  const upvoteStyle = {
    backgroundColor: selected ? "#E5E8FD" : "#F4F6F8",
  };

  // Style for the SVG arrow with conditional on its selected state
  const arrowStyle = {
    fill: selected ? "#253CF2" : "#343A40",
  };

  return (
    <div
      style={upvoteStyle}
      onClick={onToggle}
      className="upvote"
      data-testid="upvote"
    >
      <ArrowUp style={arrowStyle} />
    </div>
  );
};

export default Upvote;

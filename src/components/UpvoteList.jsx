import React from "react";
import { useUpvoteLists } from "../UpvoteListContext";
import Upvote from "./Upvote";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { ReactComponent as MinusIcon } from "../assets/minus.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import "./UpvoteList.css";

const UpvoteList = ({ listIndex }) => {
  const {
    upvoteLists,
    addUpvote,
    toggleUpvotes,
    removeLastUpvote,
    removeList,
  } = useUpvoteLists();
  const upvotes = upvoteLists[listIndex] || [];

  return (
    <div>
      <div className="upvote-list">
        {upvotes.map((upvote, index) => (
          <Upvote
            key={index}
            selected={upvote.selected}
            onToggle={() => toggleUpvotes(listIndex, index)}
          />
        ))}
      </div>
      <button
        className="ctrl-button"
        onClick={() => addUpvote(listIndex)}
        title="Add Upvote"
      >
        <PlusIcon style={{ width: "24px", height: "24px" }} />
      </button>
      {upvotes.length > 1 && (
        <button
          className="ctrl-button"
          onClick={() => removeLastUpvote(listIndex)}
          title="Remove Last Upvote"
        >
          <MinusIcon style={{ width: "24px", height: "24px" }} />
        </button>
      )}
      <button
        className="ctrl-button"
        onClick={() => removeList(listIndex)}
        title="Remove Upvote List"
      >
        <TrashIcon style={{ width: "24px", height: "24px" }} />
      </button>
    </div>
  );
};

export default UpvoteList;

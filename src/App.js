import React from "react";
import { UpvoteListProvider, useUpvoteLists } from "./UpvoteListContext";
import UpvoteList from "./components/UpvoteList";
import "./App.css";

const AppContent = () => {
  const { upvoteLists, createNewList, clearUpvoteLists } = useUpvoteLists();

  return (
    <div>
      <div className="header-wrapper">
        <button onClick={createNewList}>Create New Upvote List</button>
        <button onClick={clearUpvoteLists}>Clear All Upvote Lists</button>
      </div>
      <div className="app-content">
        {upvoteLists.map((_, index) => (
          <UpvoteList key={index} listIndex={index} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <UpvoteListProvider>
      <AppContent />
    </UpvoteListProvider>
  );
};

export default App;

import React, { createContext, useContext, useState, useEffect } from "react";

const UpvoteListContext = createContext();

export const useUpvoteLists = () => useContext(UpvoteListContext);

export const UpvoteListProvider = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState(() => {
    const storedLists = localStorage.getItem("upvoteLists");
    return storedLists ? JSON.parse(storedLists) : [];
  });

  useEffect(() => {
    localStorage.setItem("upvoteLists", JSON.stringify(upvoteLists));
  }, [upvoteLists]);

  const addUpvote = (listIndex) => {
    const newList = [...upvoteLists];
    const selected = false;
    newList[listIndex].push({ selected });
    setUpvoteLists(newList);
  };

  const toggleUpvotes = (listIndex, upvoteIndex) => {
    const newList = upvoteLists.map((list, idx) => {
      if (idx === listIndex) {
        return list.map((upvote, index) => {
          if (index === upvoteIndex) {
            return { ...upvote, selected: !upvote.selected };
          }
          return upvote;
        });
      }
      return list;
    });
    setUpvoteLists(newList);
  };

  // Extra functions from my points of view
  // To clear all upvote lists
  const clearUpvoteLists = () => {
    setUpvoteLists([]);
  };

  // To create a new list
  const createNewList = () => {
    setUpvoteLists([...upvoteLists, [{ selected: false }]]);
  };

  // To remove the whole list
  const removeList = (listIndex) => {
    setUpvoteLists((currentLists) =>
      currentLists.filter((_, index) => index !== listIndex)
    );
  };

  // To remove the last upvote from the list
  const removeLastUpvote = (listIndex) => {
    setUpvoteLists((currentLists) =>
      currentLists.map((list, index) => {
        if (index === listIndex && list.length > 1) {
          return list.slice(0, -1);
        }
        return list;
      })
    );
  };
  // End of extra functions

  return (
    <UpvoteListContext.Provider
      value={{
        upvoteLists,
        addUpvote,
        toggleUpvotes,
        createNewList,
        clearUpvoteLists,
        removeList,
        removeLastUpvote,
      }}
    >
      {children}
    </UpvoteListContext.Provider>
  );
};

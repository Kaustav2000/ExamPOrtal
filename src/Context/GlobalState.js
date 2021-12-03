import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  QuestionSet: [
    {
      id: 1,
      Q: "What is the capital of India",
      A: "Delhi",
      answered: false,
      givenAns: "",
      Options: ["Delhi", "A", "B", "C"],
      visited: false,
    },
    {
      id: 2,
      Q: "What is the capital of USA",
      A: "NY",
      answered: false,
      givenAns: "",
      Options: ["NY", "D", "E", "F"],
      visited: false,
    },
    {
      id: 3,
      Q: "What is the capital of Australia",
      A: "Sydney",
      answered: false,
      givenAns: "",
      Options: ["H", "G", "Sydney", "I"],
      visited: false,
    },
    {
      id: 4,
      Q: "What is the capital of Britan",
      A: "London",
      answered: false,
      givenAns: "",
      Options: ["K", "J", "London", "L"],
      visited: false,
    },
    {
      id: 5,
      Q: "What is the capital of Russia",
      correactA: "Berlin",
      answered: false,
      givenAns: "",
      Options: ["Berlin", "M", "N", "O"],
      visited: false,
    },
  ],
  selectedQ: null,
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const updatedAns = (ans) => {
    dispatch({
      type: "ADD_ANSWER", //mandatory
      payload: ans,
    });
  };

  const changeClick = (id) => {
    dispatch({
      type: "FETCH_QUESTION", //mandatory
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        QuestionSet: state.QuestionSet,
        updatedAns: updatedAns,
        changeClick: changeClick,
        selectedQ: state.selectedQ,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

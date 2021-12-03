import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import QuestionItem from "./QuestionItem";

const LeftPanel = () => {
  let { QuestionSet, updatedAns, selectedQ } = useContext(GlobalContext);
  let [count, setCount] = useState(0);
  let [currentQ, setCurrentQ] = useState(QuestionSet[0]);
  let [givenAns, setGivenAns] = useState("");
  const handleClick = () => {
    setCount(++count);
    setGivenAns("");
    setCurrentQ(QuestionSet[count]);
  };
  useEffect(() => {
    return () => {
      setGivenAns("");
    };
  }, []);

  const saveAnswer = (e) => {
    let obj = {
      ...currentQ,
      answered: true,
      givenAns: givenAns,
      visited: true,
    };
    updatedAns(obj);
    console.log(obj);
  };
  const handleChange = (e) => {
    setGivenAns(e.target.value);
  };
  console.log(QuestionSet, selectedQ);
  return (
    <div className="left-panel">
      <h1>
        Question {count + 1} of {QuestionSet.length}
      </h1>
      {/* {QuestionSet !== undefined &&
        QuestionSet.map((item, index) => <QuestionItem item={item} />)} */}
      <QuestionItem
        handleChange={handleChange}
        currentQ={selectedQ || currentQ}
      />
      <button
        disabled={count < 4 ? false : true}
        onClick={() => {
          handleClick();
          saveAnswer();
        }}
      >
        Save & Next
      </button>
    </div>
  );
};

export default LeftPanel;

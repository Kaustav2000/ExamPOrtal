import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

const RightPanel = () => {
  let { QuestionSet, changeClick } = useContext(GlobalContext);

  let css = (item) => {
    let className = "";
    if (item.visited && !item.givenAns.length) {
      className = "not-answered";
    } else if (item.visited && item.givenAns.length) {
      className = "attempted";
    } else if (item.visited !== true) {
      className = "not-visited";
    }
    return className;
  };
  const clickHandler = (id) => {
    changeClick(id);
  };

  return (
    <div>
      <ul className="questionList">
        {QuestionSet.map((item, idx) => (
          <li className={css(item)} onClick={() => clickHandler(item.id)}>
            {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightPanel;

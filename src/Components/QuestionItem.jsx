import React, { useEffect } from "react";
import { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const QuestionItem = ({ currentQ, handleChange }) => {
  let { selectedQ } = useContext(GlobalContext);

  let [value, setValue] = useState("");
  useEffect(() => {
    return () => {
      setValue("");
    };
  }, []);
  return (
    <div className="questionItem">
      {currentQ.Q}

      {currentQ.Options.map((item, index) => (
        <Fragment>
          <br />
          <input
            type="radio"
            id={item}
            name="foo"
            value={item}
            checked={item === value}
            onChange={(e) => {
              setValue(e.target.value);
              handleChange(e);
            }}
          />
            <label htmlFor={item}>{item}</label>
        </Fragment>
      ))}
    </div>
  );
};

export default QuestionItem;

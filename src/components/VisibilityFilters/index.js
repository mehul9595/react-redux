import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const onFitlerClick = (params) => {
    console.log(params);
    dispatch({ type: "SET_FILTER", filter: params });
  };
  return (
    <>
      <span className="filter" onClick={() => onFitlerClick("all")}>
        all
      </span>
      <span className="filter" onClick={() => onFitlerClick("completed")}>
        completed
      </span>
      <span className="filter" onClick={() => onFitlerClick("pending")}>
        pending
      </span>
    </>
  );
};

export default VisibilityFilter;

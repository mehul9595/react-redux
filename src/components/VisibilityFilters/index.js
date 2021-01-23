import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const VisibilityFilter = useSelector((state) => state.VisibilityFilter);

  const onFitlerClick = (params) => {
    console.log(params);
    dispatch({ type: "SET_FILTER", filter: params });
  };
  return (
    <>
      <span
        className={"filter " + (VisibilityFilter === "all" ? "active" : "")}
        onClick={() => onFitlerClick("all")}
      >
        all
      </span>
      <span
        className={
          "filter " + (VisibilityFilter === "completed" ? "active" : "")
        }
        onClick={() => onFitlerClick("completed")}
      >
        completed
      </span>
      <span
        className={"filter " + (VisibilityFilter === "pending" ? "active" : "")}
        onClick={() => onFitlerClick("pending")}
      >
        pending
      </span>
    </>
  );
};

export default VisibilityFilter;

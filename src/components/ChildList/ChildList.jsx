import React from "react";
import Child from "../Child/Child";

const ChildList = ({ children }) => {
  return (
    <>
      {children.map((child) => {
        return <Child key={child.id} child={child} />;
      })}
    </>
  );
};

export default ChildList;

import React from "react";
import Record from "./record";

const BottomSection = () => {
  return (
    <div className="w-full h-full bg-base-100 border-y-rounded rounded-t-xl ">
      <h1 className="">Last Records</h1>
      <Record />
      <Record />
      <Record />
      <Record />
    </div>
  );
};

export default BottomSection;
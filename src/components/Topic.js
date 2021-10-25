import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const Topic = () => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-white font-bold">DevFinder</h1>
        <span className=" flex justify-items-center items-center  ">
          <span className="inline-block mr-4">Light</span>
          <FaRegLightbulb />
        </span>
      </div>
    </>
  );
};

export default Topic;

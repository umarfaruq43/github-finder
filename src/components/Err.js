import React from "react";

const Err = () => {
  return (
    <div className=" w-full h-screen bg-primary ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl text-white md:text-5xl w-full ">
        <span className="font-bold pb-5 block"> 404</span>
        <div className=" text-3xl md:text-5xl">Page Not found</div>
      </div>
    </div>
  );
};

export default Err;

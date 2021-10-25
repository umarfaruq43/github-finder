import React, { useState } from "react";
import Card from "./cards/Card";
import Search from "./Search";
import Topic from "./Topic";

const MainSearch = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <div className=" bg-primary h-screen text-white p-4 ">
        <div className="absolute top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full p-4  md:w-3/4 lg:w-5/12 xl:w-2/6  ">
          <Topic data={data} setData={setData} />
          <Search data={data} setData={setData} />
          <Card data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default MainSearch;

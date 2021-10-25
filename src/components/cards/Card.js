import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import Links from "./Links";
import Repo from "./Repo";
import User from "../../assest/img/user.jpeg";

const Card = ({ data }) => {
  return (
    <div className="bg-primary_light rounded mt-5 p-3 flex flex-col md:flex-row justify-between ">
      <Avatar data={data} />

      <div className="  details p-2 w-full md:w-9/12">
        <Details data={data} />
        <Repo data={data} />
        <Links data={data} />
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import User from "../../assest/img/user.jpeg";

const Avatar = ({ data }) => {
  return (
    <>
      <div className=" w-full md:w-1/4 h-24 overflow-hidden">
        <img
          src={data.avatar_url ? data.avatar_url : User}
          className="w-full object-cover h-full md:w-24  md:h-24 md:rounded-full"
          alt=""
        />
      </div>
    </>
  );
};

export default Avatar;

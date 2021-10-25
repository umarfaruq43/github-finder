import React from "react";

const Details = ({ data }) => {
  const formattedDate = (dateCreated) => {
    let userDate = new Date(dateCreated);
    return userDate.toLocaleDateString();
  };
  return (
    <>
      <div className="equal_div justify-between ">
        <h1 className="font-bold text-xl">
          {data.name ? data.name : "Unavailable "}
        </h1>
        <span className="text-md inline-block">
          {data.created_at
            ? `Joined ${formattedDate(data.created_at)}`
            : "date not specified "}
        </span>
      </div>

      <div className="text-secondary_light text-xs mt-2 mb-3">
        {" "}
        {data.login ? `@${data.login}` : "@username"}{" "}
      </div>

      <div className="text-sm">
        {data.bio ? data.bio : " This profile as no bio..."}
      </div>
    </>
  );
};

export default Details;

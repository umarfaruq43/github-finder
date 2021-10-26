import React from "react";

const Details = ({ data }) => {
  const formattedDate = (dateCreated) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let userDate = new Date(dateCreated);
    let day = userDate.getDate();
    let month = userDate.getMonth();
    let year = userDate.getFullYear();

    return day + " " + months[month] + " " + year;
  };
  return (
    <>
      <div className="equal_div justify-between ">
        <h1 className="font-bold text-xl">
          {data.name ? data.name : "Unavailable "}
        </h1>
        <span className="text-xs inline-block">
          {data.created_at
            ? `Joined ${formattedDate(data.created_at)}`
            : "date not specified "}
        </span>
      </div>

      <div className="text-secondary_light text-xs mt-2 mb-3">
        {data.login ? `@${data.login}` : "@username"}
      </div>

      <div className="text-sm">
        {data.bio ? data.bio : " This profile as no bio..."}
      </div>
    </>
  );
};

export default Details;

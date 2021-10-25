import React from "react";

const Repo = ({ data }) => {
  return (
    <div className=" bg-primary my-6 rounded-lg w-full py-3 px-6 equal_div justify-between text-center ">
      <div>
        Repo
        <br />
        <span className="number">
          {data.public_repos ? data.public_repos : 0}
        </span>
      </div>

      <div>
        Followers
        <br />
        <span className="number"> {data.followers ? data.followers : 0} </span>
      </div>

      <div>
        Following
        <br />
        <span className="number"> {data.following ? data.following : 0} </span>
      </div>
    </div>
  );
};

export default Repo;

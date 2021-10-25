import React from "react";
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { BrowserRouter, NavLink } from "react-router-dom";

const Links = ({ data }) => {
  const { location, twitter_username, html_url, type } = data;
  return (
    <BrowserRouter>
      <div className="equal_div mb-3 ">
        <div className="w-1/2 equal_div">
          <FaMapMarkerAlt />
          <span className="inline-block ml-4 text-sm">
            {location ? location : "Not Specified"}
          </span>
        </div>

        <div className="w-1/2 equal_div">
          <FaTwitter />
          <span className="inline-block ml-4 text-sm">
            {twitter_username ? twitter_username : "Not Specified"}
          </span>
        </div>
      </div>
      <div className="equal_div ">
        <div className="w-1/2 equal_div">
          <FaLink />
          <NavLink
            to={html_url ? html_url : "#"}
            className="inline-block ml-4 text-sm"
          >
            {html_url ? "Go to gitHub" : " Not Specified "}
          </NavLink>
        </div>

        <div className="w-1/2 equal_div">
          <FaBuilding />
          <span className="inline-block ml-4 text-sm">
            {type ? type : " Not specified "}
          </span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Links;

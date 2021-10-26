import React from "react";
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { BrowserRouter, Link, NavLink, useHistory } from "react-router-dom";

const Links = ({ data }) => {
  const { location, twitter_username, html_url, type } = data;

  const formattedLink = (link) => {
    if (link.length >= 16) {
      return link.slice(0, 16) + "...";
    } else {
      return link;
    }
  };

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
          <a
            href={html_url ? html_url : "#"}
            className="inline-block ml-4 text-sm cursor-pointer"
          >
            {html_url ? formattedLink(html_url) : " Not Specified "}
          </a>
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

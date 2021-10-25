import React, { useState } from "react";
import * as Icons from "react-icons/fa";

const Search = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  const url = `https://api.github.com/users/${search}`;

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCountryData();
  };
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <form className="relative m-0 p-0">
      <span className="absolute text-secondary_light text-xl top-1/2 left-5 md:left-6 transform -translate-x-1/2 -translate-y-1/2 ">
        <Icons.FaSearch />
      </span>
      <input
        type="text"
        placeholder="Search GitHub username"
        className=" w-full p-3 px-11 rounded-md bg-primary_light focus:shadow-md focus:outline-none text-sm "
        onChange={handleChange}
        value={search}
      />

      <button className="input_btn" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default Search;

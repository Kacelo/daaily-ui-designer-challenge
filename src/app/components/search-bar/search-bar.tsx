"use client";
import React from "react";

const SearchBar = () => {
    const handleSearch = (query: string) => {
        console.log("hello:", query);
      };
  return (
    <div className="">
      <h1>Hello</h1>
      <form>
        <input
          type="text"
          name="query"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="border m-auto"
          placeholder="Search"
        ></input>
      <input type="text" name="name" />

      </form>
    </div>
  );
};

export default SearchBar;

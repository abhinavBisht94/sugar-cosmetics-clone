import React from "react";
import "./search.css";
import { BiArrowBack } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Search = () => {
  return (
    <div className="app__search">
      <BiArrowBack className="back-arrow" />
      <input type="text" placeholder="Search..." />
      <MdClose className="close-arrow" />
    </div>
  );
};

export default Search;

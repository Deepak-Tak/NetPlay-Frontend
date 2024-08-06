import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchSuggestion = ({ data }) => {
  const navigate = useNavigate();
  return (
    <ul className="absolute w-full h-80   overflow-y-scroll  bg-white  shadow-lg border rounded-md">
      {data.map((item) => (
        <li
          key={item}
          className="px-2 py-1 flex  font-sans cursor-pointer hover:bg-[#f0f0f0] hover:rounded-lg"
          onMouseDown={() => navigate("/results?search_query=" + item)}
        >
          <CiSearch className="inline self-center mr-3 w-5 h-5" />
          <span>{" " + item}</span>

        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestion;

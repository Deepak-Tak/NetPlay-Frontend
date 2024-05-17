import React from "react";
import { useNavigate } from "react-router-dom";

const SearchSuggestion = ({ searchResult }) => {
  const navigate = useNavigate();
  return (
    <ul className="absolute w-full h-80  overflow-y-scroll  bg-white  shadow-lg border rounded-md">
      {searchResult.map((item) => (
        <li
          key={item}
          className="px-2 py-1  font-sans cursor-pointer hover:bg-[#f0f0f0]"
          onMouseDown={() => navigate("/results?search_query=" + item)}
        >
          🔍 {item}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestion;

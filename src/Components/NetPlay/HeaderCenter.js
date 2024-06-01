import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTOSUGGESION_API } from "../../utils/constants";
import { cacheResults } from "../../utils/searchSlice";
import SearchSuggestion from "./SearchSuggestion";
import { Link } from "react-router-dom";

const HeaderCenter = () => {
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [autosuggesion, setAutosuggesion] = useState([]);
  const dispatch = useDispatch();

  const cacheData = useSelector((store) => store.search);
  useEffect(() => {
    if (searchQuery in cacheData) {
      setAutosuggesion(cacheData[searchQuery]);
    } else {
      const timerRef = setTimeout(() => {
        fetchSearchSuggestions();
      }, 300);
      return () => clearTimeout(timerRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const data = await fetch(AUTOSUGGESION_API + searchQuery);
    const json = await data.json();
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    setAutosuggesion(json[1]);
  };
  return (
    <div className=" min-w-0  flex-shrink relative  mx-1">
      <div className=" flex min-w-0">
        <input
          className="border-[#c6c6c6] min-w-0 shrink p-3 h-7 border-r-0 border-[1.3px] rounded-l-3xl"
          type="text"
          value={searchQuery}
          placeholder="Search..."
          onFocus={() => setDisplaySearchBox(true)}
          onBlur={() => setDisplaySearchBox(false)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Link
          className="flex min-w-8"
          to={"/results?search_query=" + searchQuery}
        >
          <button className="border-[#c6c6c6] bg-slate-200 min-w-0 w-16 h-7 border-l-0 border-[1.3px] rounded-r-3xl">
            🔍
          </button>
        </Link>
      </div>
      {displaySearchBox && autosuggesion.length > 0 && (
        <SearchSuggestion data={autosuggesion} />
      )}
    </div>
  );
};

export default HeaderCenter;

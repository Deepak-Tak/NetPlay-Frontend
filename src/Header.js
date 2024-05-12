import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTOSUGGESION_API } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "./utils/searchSlice";
import Profile from "./profile/Profile";

const Header = ({ switchSidebar }) => {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [searchResult, setSearchResult] = useState([]);
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayProfile, setDisplayProfile] = useState(false);
  const cacheData = useSelector((store) => store.search);
  useEffect(() => {
    if (searchQuery in cacheData) {
      setSearchResult(cacheData[searchQuery]);
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
    setSearchResult(json[1]);
  };

  return (
    <header className="flex flex-row justify-between sticky bg-white top-0 p-4 items-center shadow-md">
      <div className=" flex justify-between items-center flex-shrink-0">
        <img
          className="w-[26px] h-[18px] mr-4"
          alt="menuicon"
          src="/menulogo.png"
          onClick={switchSidebar}
        />
        <Link to={"/"}>
          <img
            className="w-[90px] h-[20px]"
            alt="logo"
            src="/youtubelogo.png"
          />
        </Link>
      </div>

      <div className="relative flex flex-shrink min-w-0 ">
        <input
          className="border-[#c6c6c6] min-w-0  p-2 h-7 border-r-0 border-[1.3px] rounded-l-3xl"
          type="text"
          value={searchQuery}
          onFocus={() => setDisplaySearchBox(true)}
          onBlur={() => setDisplaySearchBox(false)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Link to={"/results?search_query=" + searchQuery}>
          <button className="border-[#c6c6c6] bg-slate-200  w-16 h-7 border-l-0 border-[1.3px] rounded-r-3xl">
            🔍
          </button>
        </Link>
        {displaySearchBox && searchResult.length > 0 && (
          <ul className=" absolute bg-white shrink w-80 shadow-lg border rounded-md">
            {searchResult.map((item) => (
              <li
                key={item}
                className="p-1 cursor-pointer hover:bg-slate-400"
                onMouseDown={() => navigate("/results?search_query=" + item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-8 relative flex-shrink-0">
        <img
          alt="userlogo"
          src="/userlogo.png"
          onClick={() => setDisplayProfile(!displayProfile)}
        ></img>
        {displayProfile ? <Profile /> : null}
      </div>
    </header>
  );
};

export default Header;

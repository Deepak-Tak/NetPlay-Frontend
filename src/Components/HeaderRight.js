import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";

const HeaderRight = () => {
  const [displayProfile, setDisplayProfile] = useState(false);
  const navigate = useNavigate();
  const displaySidebar = useSelector((store) => store.sidebar[0]);
  return (
    <div className="relative flex flex-shrink-0">
      <div className="mr-4">
        <label class="inline-flex items-center align-middle cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            checked={!displaySidebar}
            onChange={(e) => {
              if (e.target.checked) {
                navigate("/browse");
              } else {
                navigate("/");
              }
            }}
          />
          <div className="relative w-7 h-4 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-red-600-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
        </label>
      </div>
      <img
        alt="userlogo"
        src="/userlogo.png"
        className="w-8"
        onClick={() => setDisplayProfile(!displayProfile)}
      ></img>
      {displayProfile ? <Profile /> : null}
    </div>
  );
};

export default HeaderRight;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "../../profile/Profile";
import { FaUserCircle } from "react-icons/fa";

const HeaderRight = () => {
  const [displayProfile, setDisplayProfile] = useState(false);
  const navigate = useNavigate();
  const theaterMode = useSelector((store) => store.sidebar[0]);

  return (
    <div className="relative flex flex-shrink-0">
      <div className="mr-2">
        <label className="inline-flex items-center align-middle cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={!theaterMode}
            onChange={(e) => {
              if (e.target.checked) {
                navigate("/browse/0");
              } else {
                navigate("/");
              }
            }}
          />
          <div className="relative w-7 h-4 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-red-600-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
        </label>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <FaUserCircle className="size-8"
          onClick={(e) => {
            setDisplayProfile(!displayProfile);
          }} />


        {displayProfile ? (
          <Profile handleOutsideClick={setDisplayProfile} />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderRight;

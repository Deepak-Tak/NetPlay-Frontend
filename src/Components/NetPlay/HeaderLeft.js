import React from "react";
import { useDispatch } from "react-redux";
import { setToogle } from "../../utils/sidebarSlice";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-between items-center flex-shrink-0">
      <img
        className="w-[26px] h-[18px] mr-4"
        alt="menuicon"
        src="/menulogo.png"
        onClick={() => dispatch(setToogle())}
      />
      <Link to={"/"}>
        <img
          className="w-[90px] h-[20px]"
          alt="logo"
          src="/NETPLAY__1_-removebg-preview.png"
        />
      </Link>
    </div>
  );
};

export default HeaderLeft;
import React from "react";
import { useDispatch } from "react-redux";
import { loggedIn } from "../utils/loginSlice";
import { Link } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center  px-6 lg:px-8 absolute max-[475px]:top-full max-[475px]:right-0 right-full bg-white w-64 rounded-lg shadow-2xl shadow-slate-950">
        <div className="my-2 mt-4 ">
          <img className="size-32 mx-auto" alt="userlogo" src="/userlogo.png" />
          <div className="text-center">
            <div>{localStorage.getItem("username")}</div>
            <div>{localStorage.getItem("email")}</div>
          </div>
        </div>
        <div className="my-2 text-center text-xl font-semibold hover:cursor-pointer hover:bg-gray-300">
          Account
        </div>
        <Link to={"/playlist"}>
          <div className="my-2 text-center text-xl font-semibold hover:cursor-pointer hover:bg-gray-300">
            Playlist
          </div>
        </Link>
        <div
          className="my-2 mb-4  text-center text-xl font-semibold hover:cursor-pointer hover:bg-gray-300"
          onClick={() => {
            localStorage.clear();
            dispatch(loggedIn());
          }}
        >
          SignOut
        </div>
      </div>
    </>
  );
};

export default LogIn;

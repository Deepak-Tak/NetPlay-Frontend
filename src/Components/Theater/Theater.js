import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useDispatch } from "react-redux";
import { theaterMode } from "../../utils/sidebarSlice";
import { useParams } from "react-router-dom";
import GptSearch from "./GptSearch";

const Theater = () => {
  const dispatch = useDispatch();
  const untoogle = () => dispatch(theaterMode(true));
  const { Id } = useParams();
  console.log(Id);

  useEffect(() => {
    dispatch(theaterMode(false));
    return untoogle;
  }, []);
  if (Id === "1") return <GptSearch />;
  return (
    <div>
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Theater;

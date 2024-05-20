import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useDispatch } from "react-redux";
import { displaySidebar } from "../../utils/sidebarSlice";

const Theater = () => {
  const dispatch = useDispatch();
  const untoogle = () => dispatch(displaySidebar(true));

  useEffect(() => {
    dispatch(displaySidebar(false));
    return untoogle;
  }, []);

  return (
    <div>
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Theater;

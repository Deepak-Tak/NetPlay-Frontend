import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import LogIn from "./LogIn";

const Profile = ({ handleOutsideClick }) => {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const loggedIn = useSelector((store) => store.login);
  useEffect(() => {
    document.addEventListener("click", () => {
      handleOutsideClick(false);
    });

    return () => {
      document.removeEventListener("click", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loggedIn[0]) return <LogIn />;
  return (
    <div>
      {displaySignUp ? (
        <SignUp setDisplaySignUp={setDisplaySignUp} />
      ) : (
        <SignIn setDisplaySignUp={setDisplaySignUp} />
      )}
    </div>
  );
};

export default Profile;

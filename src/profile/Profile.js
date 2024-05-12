import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import LogIn from "./LogIn";

const Profile = () => {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const loggedIn = useSelector((store) => store.loginSlice);
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

import React, { useEffect, useRef, useState } from "react";
import { VIDEO_LIST_BY_IDS } from "./utils/constants";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const Playlist = () => {
  const [data, setData] = useState(null);
  console.log(data);
  const loggedIn = useSelector((store) => store.loginSlice);

  const myRef = useRef(null);
  useEffect(() => {
    if (loggedIn[0]) {
      fetch("http://localhost:3000/playlist/", {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        }),
      })
        .then((data) => {
          console.log(data.ok);
          if (data.ok) return data.json();
          else {
            throw new Error("invalid credentials");
          }
        })
        .then(({ message }) => {
          if (message.length) {
            let videoIds = "";
            for (let value of message) {
              videoIds = videoIds + value + ",";
            }
            videoIds = videoIds.substring(0, videoIds.length - 1);
            return fetch(VIDEO_LIST_BY_IDS + videoIds);
          } else {
            throw new Error("No videos in Playlist");
          }
        })
        .then((data) => data.json())
        .then((data) => setData(data))
        .catch((error) => {
          myRef.current.innerHTML = error.message;
        });
    } else {
      myRef.current.innerHTML = "Login First";
    }
  }, [loggedIn]);
  if (data) {
    return (
      <div className="flex flex-wrap">
        <div className="mt-4 font-normal text-xl">Playlist:</div>

        {data.items.map((item) => (
          <SearchResult key={item.id} data={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <div className="mt-4 font-normal text-xl">Playlist:</div>
        <div ref={myRef}>Loading...</div>
      </div>
    );
  }
};

export default Playlist;

import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const loggedIn = useSelector((store) => store.loginSlice);
  const handleClick = () => {
    if (loggedIn) {
      fetch("http://localhost:3000/playlist/add", {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        }),
        body: JSON.stringify({ playlistItem: searchParams.get("v") }),
      });
    }
  };
  return (
    <div className="top-[68px] relative">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex justify-end">
        <img
          className="mt-2 size-8  cursor-pointer hover:bg-slate-300"
          alt="playlisticon"
          src="/playlisticon.png"
          onClick={handleClick}
        />
      </div>
      <CommentsContainer />
    </div>
  );
};
export default WatchPage;

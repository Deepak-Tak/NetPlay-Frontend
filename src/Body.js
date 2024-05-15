import { useEffect, useState } from "react";
import { VIDEO_LIST_API } from "./utils/constants";
import VideoCard from "./VideoCard";

const Body = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    const data = async () => {
      const fetchData = await fetch(VIDEO_LIST_API);
      const json = await fetchData.json();
      setVideoList(json.items);
    };
    data();
  }, []);

  return (
    <div className="flex flex-shrink min-w-0 flex-wrap mt-1 justify-around">
      {videoList
        ? videoList.map((item) => (
            <VideoCard key={item.id} videoDetails={item} />
          ))
        : null}
    </div>
  );
};

export default Body;

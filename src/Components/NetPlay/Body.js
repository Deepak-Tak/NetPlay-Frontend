import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import VideoCard from "./VideoCard";
import { useRef } from "react";

const Body = () => {
  const scrollref = useRef(null)
  const { data, number } = useInfiniteScroll(scrollref);
  return (
    <div ref={scrollref} className="flex flex-shrink pt-4 box-border h-screen overflow-y-scroll  border-t-[64px] z-[0] min-w-0 flex-wrap justify-around">
      {data
        ? data.items.map((item, index) =>
          index < number ? (
            <VideoCard key={item.id} videoDetails={item} />
          ) : null
        )
        : null}
    </div>
  );
};

export default Body;

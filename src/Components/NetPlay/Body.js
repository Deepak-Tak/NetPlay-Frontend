import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import Categories from "./Categories";
import VideoCard from "./VideoCard";
import { useRef } from "react";

const Body = () => {
  const scrollref = useRef(null)
  const { data, number } = useInfiniteScroll(scrollref);
  const categories = ["All", "Live", "News", "JavaScript", "ComputerProgramming", "Music", "MediaTheories", "Sports", "One Day International", "Dance", "UPSC", "MediaTheories", "Sports", "One Day International", "Dance", "UPSC"]
  return (
    <div ref={scrollref} className="flex flex-shrink box-border h-screen overflow-y-scroll
   border-t-[64px] z-[0] min-w-0 flex-wrap justify-around">
      <div className="w-full flex justify-around sticky py-3 top-0 bg-white flex-nowrap overflow-x-scroll scrollbar-none">
        {categories.map((text) => <Categories text={text} />)}
      </div>
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

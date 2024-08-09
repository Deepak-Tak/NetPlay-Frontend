import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import Categories from "./Categories";
import VideoCard from "./VideoCard";
import { useRef, useState } from "react";

const Body = () => {
  const scrollref = useRef(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const { data, number, isFetching, isError } = useInfiniteScroll(scrollref, activeCategory);
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const categories = ["All", "Live", "News", "JavaScript", "ComputerProgramming", "Music", "MediaTheories", "Sports", "One Day International", "Dance", "UPSC", "India", "World", "Mathematics", "Physics", "RAS"]
  return (
    <div ref={scrollref} className="flex flex-shrink box-border h-screen overflow-y-scroll
   border-t-[64px] z-[0] min-w-0 flex-wrap justify-around">
      <div className="w-full flex justify-around sticky py-3 z-10 top-0 bg-white flex-nowrap overflow-x-scroll scrollbar-none">
        {categories.map((text) => <Categories key={text} text={text} activeCategory={{ activeCategory, setActiveCategory }} />)}
      </div>
      <div className="flex flex-wrap justify-around">
        {isFetching || isError ? x.map((item, index) => <ShimmerPlaceholder key={index} />) : (data
          ? data.items.map((item, index) =>
            index < number ? (
              <VideoCard key={activeCategory === "All" ? item.id : item.id.videoId} activeCategory={activeCategory} videoDetails={item} />
            ) : null
          )
          : null)}
      </div>
    </div>

  );
};

export default Body;
const ShimmerPlaceholder = () => {
  return (
    <div className="p-4 hover:p-2 basis-[340px] w-[340px] h-[321.25px] flex-shrink-0 cursor-pointer">
      <div className="w-full h-[180px] bg-slate-200 animate-pulse rounded-xl"></div>
      <div className="p-2">
        <div className="w-3/4 h-5 bg-slate-200 animate-pulse rounded-md mb-2"></div>
        <div className="w-1/2 h-4 bg-slate-200 animate-pulse rounded-md mb-1"></div>
        <div className="flex">
          <div className="w-1/4 h-4 bg-slate-200 animate-pulse rounded-md mr-2"></div>
          <div className="w-1/4 h-4 bg-slate-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

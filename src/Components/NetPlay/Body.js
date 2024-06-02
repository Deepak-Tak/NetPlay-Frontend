import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import VideoCard from "./VideoCard";

const Body = () => {
  const { data, number } = useInfiniteScroll();
  return (
    <div className="flex flex-shrink relative top-[68px] z-[0] min-w-0 flex-wrap mt-1 justify-around">
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

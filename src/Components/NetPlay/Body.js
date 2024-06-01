import VideoCard from "./VideoCard";
import { useFetchVideoListQuery } from "../../utils/bodySlice";

const Body = () => {
  const { data } = useFetchVideoListQuery();
  return (
    <div className="flex flex-shrink relative top-[68px] z-[0] min-w-0 flex-wrap mt-1 justify-around">
      {data
        ? data.items.map((item) => (
            <VideoCard key={item.id} videoDetails={item} />
          ))
        : null}
    </div>
  );
};

export default Body;

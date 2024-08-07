import { Link } from "react-router-dom";
import { convertViewCount, getDateDifference } from "../../utils/functions";
import { useVideoFetch } from "../../Hooks/useVideoFetch";

const VideoCard = ({ videoDetails, activeCategory, isLoading }) => {
  const { title, channelTitle, thumbnails, publishedAt } = videoDetails.snippet;

  if (isLoading) {

  }
  return (
    <div className="p-4 hover:p-2 basis-[340px]  min-w-0 flex-shrink cursor-pointer">
      <div>
        <Link to={"/watch?v=" + videoDetails.id}>
          <img
            alt="videoCard"
            className="rounded-xl"
            src={thumbnails.medium.url}
          />
        </Link>
      </div>
      <div className="p-2">
        <h4 className="text-sm break-words font-semibold">
          {title.substring(0, 87) + "..."}
        </h4>

        <h6 className="text-sm ">{channelTitle}</h6>
        <div className="flex">
          {videoDetails.statistics ? <h6 className="text-sm">
            {convertViewCount(videoDetails.statistics.viewCount)}
          </h6> : null}
          <h6 className="text-sm ml-2 ">{getDateDifference(publishedAt)}</h6>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;






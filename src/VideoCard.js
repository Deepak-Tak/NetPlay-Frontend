import { Link } from "react-router-dom";

const VideoCard = ({ videoDetails }) => {
  const { title, channelTitle, thumbnails, publishedAt } = videoDetails.snippet;
  function getDateDifference(dateString) {
    const currentDate = new Date();
    const givenDate = new Date(dateString);

    const differenceMs = currentDate - givenDate;

    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
    const differenceMinutes = Math.floor(differenceMs / (1000 * 60));

    let result;
    if (differenceDays > 0) {
      result = differenceDays + " days ago";
    } else if (differenceHours > 0) {
      result = differenceHours + " hours ago";
    } else {
      result = differenceMinutes + " minutes ago";
    }

    return result;
  }
  function convertViewCount(viewCount) {
    if (viewCount < 1000) {
      return viewCount.toString();
    } else if (viewCount < 1000000) {
      return (viewCount / 1000).toFixed(1) + "K";
    } else if (viewCount < 1000000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else {
      return (viewCount / 1000000000).toFixed(1) + "B";
    }
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
          <h6 className="text-sm">
            {convertViewCount(videoDetails.statistics.viewCount)}
          </h6>
          <h6 className="text-sm ml-2 ">{getDateDifference(publishedAt)}</h6>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;

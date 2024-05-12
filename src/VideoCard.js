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
  return (
    <Link to={"/watch?v=" + videoDetails.id}>
      <div className="w-[332px] h-[287px] cursor-pointer text-wrap">
        <img
          alt="videoCard"
          className="rounded-xl"
          src={thumbnails.medium.url}
        />
        <h4>{title}</h4>
        <h6>{channelTitle}</h6>
        <h6>{videoDetails.statistics.count}</h6>
        <h6>{getDateDifference(publishedAt)}</h6>
      </div>
    </Link>
  );
};
export default VideoCard;

import { Link } from "react-router-dom";
const SearchResult = ({ data }) => {
  const { publishedAt, title, description, thumbnails } = data.snippet;
  const { videoId } = data.id;
  function getDateDifference(dateString) {
    const currentDate = new Date();
    const givenDate = new Date(dateString);

    const differenceMs = currentDate - givenDate;

    const differenceYears = Math.floor(
      differenceMs / (1000 * 60 * 60 * 24 * 365)
    );
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
    const differenceMinutes = Math.floor(differenceMs / (1000 * 60));

    let result;
    if (differenceYears > 0) {
      result =
        differenceYears + (differenceYears === 1 ? " year" : " years") + " ago";
    } else if (differenceDays > 0) {
      result =
        differenceDays + (differenceDays === 1 ? " day" : " days") + " ago";
    } else if (differenceHours > 0) {
      result =
        differenceHours + (differenceHours === 1 ? " hour" : " hours") + " ago";
    } else {
      result =
        differenceMinutes +
        (differenceMinutes === 1 ? " minute" : " minutes") +
        " ago";
    }

    return result;
  }

  return (
    <div className="flex mt-6">
      <Link to={"/watch?v=" + videoId}>
        <div className="w-[320px] h-[180px] flex-shrink-0 mr-4">
          <img
            className="rounded-2xl "
            alt="video"
            src={thumbnails.medium.url}
          />
        </div>
      </Link>
      <div>
        <h1 className="font-sans text-xl font-normal ">{title}</h1>
        <h6>{getDateDifference(publishedAt)}</h6>
        <h6>{description.slice(0, 105) + "..."}</h6>
      </div>
    </div>
  );
};
export default SearchResult;

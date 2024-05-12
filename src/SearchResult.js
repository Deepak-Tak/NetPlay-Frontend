import { Link } from "react-router-dom";
const SearchResult = ({ data }) => {
  const { publishedAt, title, description, thumbnails } = data.snippet;
  const { videoId } = data.id;

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
        <h6>{publishedAt}</h6>
        <h6>{description.slice(0, 105) + "..."}</h6>
      </div>
    </div>
  );
};
export default SearchResult;

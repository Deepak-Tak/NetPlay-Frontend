import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { getDateDifference } from "../../utils/functions";
const SearchResult = memo(({ data }) => {
  const { publishedAt, title, description, thumbnails } = data.snippet;

  const { videoId } = data.id;
  const navigate = useNavigate()

  return (
    <div className={`flex justify-start max-[950px]:flex-col  mt-6 mx-4`}>

      <div onClick={() => navigate("/watch?v=" + videoId)} className={`flex-shrink-0 mr-4 max-[950px]:w-full`} >
        <img
          className="rounded-2xl "
          alt="video"
          src={thumbnails.medium.url}
        />
      </div>

      <div className="w-2/3 max-[950px]:w-full  mr-4 flex flex-col">
        <h1 className={`text-[#0F0F0F] max-[950px]:text-base text-xl   font-medium break-word `}>{title}</h1>
        <h6 className="text-[#606060]">{getDateDifference(publishedAt)}</h6>
        <h6 className="text-[12px] leading-5 text-[#606060] break-all">{description.slice(0, 105) + "..."}</h6>
      </div>
    </div>
  );
});
export default SearchResult;

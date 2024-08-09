import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDateDifference } from "../../utils/functions";
const SearchResult = memo(({ data }) => {
  const { publishedAt, title, description, thumbnails } = data.snippet;
  const [sizeChanged, setSizeChaged] = useState(false)
  const { videoId } = data.id;
  const navigate = useNavigate()
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width < 950)
        setSizeChaged(true)
      else
        setSizeChaged(false)

    })
    return () => window.removeEventListener("resize", () => { })
  }, [sizeChanged])
  return (
    <div className={`flex justify-start ${sizeChanged ? " flex-col " : " "}  mt-6 mx-4`}>

      <div onClick={() => navigate("/watch?v=" + videoId)} className={`flex-shrink-0 mr-4 ${sizeChanged ? "w-full" : ""}`} >
        <img
          className="rounded-2xl "
          alt="video"
          src={thumbnails.medium.url}
        />
      </div>

      <div className={`${sizeChanged ? "w-full" : "w-2/3 "} mr-4 flex flex-col`}>
        <h1 className={`text-[#0F0F0F] ${sizeChanged ? "text-base" : "text-xl "}   font-medium break-word `}>{title}</h1>
        <h6 className="text-[#606060]">{getDateDifference(publishedAt)}</h6>
        <h6 className="text-[12px] leading-5 text-[#606060] break-all">{description.slice(0, 105) + "..."}</h6>
      </div>
    </div>
  );
});
export default SearchResult;

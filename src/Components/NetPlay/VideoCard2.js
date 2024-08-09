
import { Link } from "react-router-dom";
import { convertViewCount, getDateDifference } from "../../utils/functions";

const VideoCard2 = ({ videoDetails }) => {
    const { title, channelTitle, thumbnails, publishedAt } = videoDetails.snippet;


    return (
        <div className=" flex  mt-4   min-w-0 flex-shrink cursor-pointer">
            <div className="mr-3" >
                <Link to={"/watch?v=" + videoDetails.id}>
                    <img
                        alt="videoCard "
                        className="rounded-xl aspect-video w-[168px]   object-fill "
                        src={thumbnails.medium.url}
                    />
                </Link>
            </div>
            <div className="pr-2 w-1/2  flex flex-wrap">
                <h4 className="text-sm break-words font-medium">
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
export default VideoCard2;






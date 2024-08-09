import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Details from "./Details";
import { useFetchVideoDetailsQuery } from "../../store/bodySlice";
import { ShimmerPlaceholder } from "./Body";
import RightSidePanel from "./RightSidePanel";




const LeftSidePanel = ({ data2, switchRightPanel }) => {

    const [searchParams] = useSearchParams();
    const { data, isFetching, isError } = useFetchVideoDetailsQuery(searchParams.get("v"))
    const items = data?.items

    if (isFetching || isError)
        return <ShimmerPlaceholder />

    return <div className={`flex flex-col  ${switchRightPanel ? " " : "w-2/3"} mr-3`}>
        <div className="flex flex-col">
            <iframe
                className="aspect-video w-full my-3 rounded-2xl"
                src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <Details data={items[0]} />
        </div>
        {switchRightPanel ? <RightSidePanel data2={data2} switchRightPanel={switchRightPanel} /> : false}
        <CommentsContainer commentsCount={items[0].statistics.commentCount} id={searchParams.get("v")} />
    </div>
}


export default LeftSidePanel
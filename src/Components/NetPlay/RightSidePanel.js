import { useState } from "react"
import VideoCard2 from "./VideoCard2"


const RightSidePanel = ({ data2, switchRightPanel }) => {
    const [showMore, setShowMore] = useState(false)
    const { data, isFetching, isError } = data2
    if (isFetching || isError)
        return <div></div>
    return <div className={`flex flex-col ${switchRightPanel ? " " : "w-1/3"} ml-3`}>
        {
            data.items?.map((item, index) => {
                return switchRightPanel ?
                    (!showMore ?
                        (index < 10 ? <VideoCard2 key={item.id} videoDetails={item} /> : null) :
                        (<VideoCard2 key={item.id} videoDetails={item} />)) :
                    <VideoCard2 key={item.id} videoDetails={item} />
            }
            )
        }
        <div onClick={() => setShowMore(!showMore)} className={`w-full py-2 mt-3 ${switchRightPanel ? " " : " hidden"} text-center rounded-full border text-blue-500 text-sm font-medium border-[#0000000D]`}>
            {showMore ? "Show less" : "Show more"}
        </div>
    </div >
}

export default RightSidePanel
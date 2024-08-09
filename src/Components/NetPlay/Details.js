import { FaRegBell } from "react-icons/fa"
import { GoChevronDown } from "react-icons/go"
import { PiShareFatThin } from "react-icons/pi"
import { FaRegCircleUser } from "react-icons/fa6"
import { LiaDownloadSolid } from "react-icons/lia"
import { convertDate, convertViewCount } from "../../utils/functions"
import { useFetchChannelDetailsQuery } from "../../store/bodySlice"
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { useRef, useState } from "react"



const Details = ({ data }) => {
    const [descriptionActive, setDescriptionActive] = useState(0)
    const scrollref = useRef(null);
    const loggedIn = useSelector((store) => store.login);
    const [searchParams] = useSearchParams();


    const { data: data2, isFetching: isFetching2 } = useFetchChannelDetailsQuery(data.snippet.channelId)

    const { snippet, statistics } = data
    const handleClick = () => {
        if (loggedIn) {
            fetch("http://localhost:3000/playlist/add", {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    authorization: `${localStorage.getItem("token")}`,
                }),
                body: JSON.stringify({ playlistItem: searchParams.get("v") }),
            });
        }
    };



    return <div className="flex flex-col">
        <p className="text-xl font-bold">{snippet.title}</p>
        <div className="min-h-[54.4px] flex justify-between">
            <div className="flex flex-wrap  justify-start pt-3">

                <div className=" w-[185.8px] h-[42.4] flex">
                    {isFetching2 ? <FaRegCircleUser className="size-10 mr-3" /> : <img alt="profile" src={data2.items[0].snippet.thumbnails.default.url} className="rounded-full size-10 mr-3" />}

                    <div className="flex flex-col mr-3 min-h-0">
                        <p className="text-base leading-4 font-medium">{snippet.channelTitle}</p>
                        <p className="text-sm">1.5M subscribers</p>
                    </div>

                </div>
                <div className="flex p-2 h-9 px-4 font-medium text-sm items-center bg-[#0000000D] rounded-full">
                    <FaRegBell className="mr-2 size-5" />
                    Subscribed
                    <GoChevronDown className="ml-2 size-5" />
                </div>
            </div>
            <div className="flex flex-wrap  justify-end pt-3">
                <div className="flex mb-2 h-9 p-2 px-4 font-semibold text-sm items-center bg-[#0000000D] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className=" size-[23.99px] max-[500px]:size-4 pointer-events-none " aria-hidden="true"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                    <p className="mx-2 pr-2 border-r-2 border-[#1d1c1c82]">{convertViewCount(statistics.likeCount)}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="rotate-180 size-[23.99px] max-[500px]:size-4 pointer-events-none " aria-hidden="true"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                </div>
                <div className="flex ml-3 mb-2 h-9 p-2 px-4 font-semibold text-sm items-center bg-[#0000000D] rounded-full">
                    <PiShareFatThin className="size-6 mr-2" />
                    Share
                </div>
                <div className="flex ml-3 mb-2 h-9 p-2 px-4 font-semibold text-sm items-center bg-[#0000000D] rounded-full">
                    <LiaDownloadSolid className="size-5 mr-2" />
                    Download
                </div>
                <div onClick={handleClick} className="flex mb-2 ml-3 h-9 p-2 cursor-pointer bg-[#0000000D] rounded-full" >
                    <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" className="size-6" aria-hidden="true"><path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path></svg>
                </div>
            </div>
        </div>
        <div className="my-4 ">
            <div ref={scrollref} onClick={() => setDescriptionActive(1)} className={`bg-[#0000000D] ${descriptionActive ? " " : " hover:cursor-pointer"}  p-2 rounded-md mt-3 leading-10`}>
                <p className="text-base font-medium">{convertViewCount(statistics.viewCount) + " views "}{convertDate(snippet.publishedAt)}</p>
                <p className="inline"> {descriptionActive ? snippet.description : snippet.description.slice(0, 100) + " "}</p>
                {descriptionActive ? <div onClick={(e) => { e.stopPropagation(); setDescriptionActive(0); scrollref.current.scrollIntoView({ behaivour: "smooth" }) }} className="text-base cursor-pointer font-semibold">Show less</div> : <span className="text-sm font-semibold"> " ...more"</span>}
            </div>
        </div>
    </div>
}

export default Details
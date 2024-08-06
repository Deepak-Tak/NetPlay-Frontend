import { MdMic } from "react-icons/md"
import MicPage from "./MicPage"
import { useEffect, useState } from "react"


const Mic = ({ setSearchQuery }) => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        document.addEventListener('click', () => setActive(0))
        return () => document.removeEventListener('click', () => { })
    }, [])

    return <div onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setActive(!active)} className="bg-slate-200 h-10 flex w-10 rounded-full ml-4 max-[500px]:ml-2 cursor-pointer hover:bg-slate-300">
            <MdMic className="size-6 mx-auto self-center" />
        </div >
        {active ? <MicPage setSearchQuery={setSearchQuery} setActive={setActive} /> : null}
    </div>
}

export default Mic
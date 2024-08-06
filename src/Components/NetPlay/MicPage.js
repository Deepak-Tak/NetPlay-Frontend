import { useEffect, useState } from "react"
import { MdMic } from "react-icons/md"
import beep from 'browser-beep';
import { IoMdClose } from "react-icons/io";


const MicPage = ({ setSearchQuery, setActive }) => {
    const [speech, setSpeech] = useState("Listening...")
    const [listening, setLisetening] = useState(1)
    const beepSound = beep({ frequency: 830 });
    const [timer, setTimer] = useState(null)
    function handleClick() {
        if (listening) {
            setSpeech("Microphone off. Try again.")
            setLisetening(!listening)
        }
        else {
            setSpeech("Listening...")
            setLisetening(!listening)
        }

    }
    useEffect(() => {
        if (listening) {
            let transcript

            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
            recognition.lang = 'en-US';
            recognition.onstart = () => {
                beepSound(2)

            };

            recognition.onresult = (event) => {
                transcript = event.results[0][0].transcript;
                setSpeech(transcript);
            };

            recognition.onend = () => {
                const x = setTimeout(() => {

                    if (!transcript) {
                        setSpeech("Didn't hear that. Try again.")
                        setLisetening(0)
                    }

                }, 1000);
                setTimer(x)
                if (transcript) {
                    setTimeout(() => {
                        setSearchQuery(transcript)
                        setActive(0);
                    }, 500);

                }



            };
            recognition.start()
            return () => {
                recognition.stop()
            };
        }
    }, [listening])
    useEffect(() => {
        clearTimeout(timer)
    }, [timer])



    return <div className=" w-1/3 h-1/2 flex-col flex  bg-white fixed min-w-60  top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 px-6 pt-8 rounded-md shadow-lg">

        <div className="h-3/4 flex justify-between">
            <p className="text-2xl">{speech}</p>
            <IoMdClose onClick={() => setActive(0)} className="size-8 cursor-pointer" />
        </div>
        <div>
            <div className={`${listening ? "bg-[#c82d2d]" : "bg-[#a27070]"} h-14 w-14 m-auto flex rounded-full cursor-pointer`}>
                <MdMic onClick={handleClick} style={{ color: "white" }} className="w-8 h-8 mx-auto self-center" />
            </div >
        </div>

    </div>
}

export default MicPage




// src/routes/listen.jsx

import { useRef, useState } from "react";
import { io } from "socket.io-client";
import useAudioStreamer from "./useAudioStreamer";
import { Headphones } from "react-feather";

const URL = "http://solflowernm.com:3001";

function Listen() {
    const socketRef = useRef(io(URL));
    const audioRef = useRef(null); 
    const [radioPlaying, setRadioPlaying] = useState(false)
    useAudioStreamer(socketRef.current);
    
    const startRadio = () => { 

        async function toggleRadio(){ 
            if(audioRef.current.paused){ 
                audioRef.current.play(); 
                setRadioPlaying(true);
            }
            else if (!audioRef.current.paused){ 
                audioRef.current.pause(); 
                setRadioPlaying(false);
            }
        }
        toggleRadio(); 
    }

    return (
        <div className="flex flex-col items-center h-full">
            <div className="rounded-full bg-gray-700 p-6 mt-5">
                <Headphones size={50} />
            </div>
            <button onClick={startRadio}> {radioPlaying ? "stop radio... " : "start radio!"} </button>
            <audio ref = {audioRef} src={`${URL}/stream`} autostart= "0" type = "audio/mp3"/>
        </div>
    );
}

export default Listen;

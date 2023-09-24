import React, {useRef} from 'react'
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";


const ChatBody = ({chat}) => {
    const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

    const parent = useRef(null);
    const bottomRef = useRef(null);

    // animations
    useEffect(()=>{
        parent.current && autoAnimate(parent.current);
    }, [parent])

    //Scrolling
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [chat])

  return (
    <div className="flex flex-col gap-4">
        {/* User Message */}
        {
            chat.map((message, i) => {
                return(
                    <div key={i} className={`border-[#797979] break-words border-2 rounded-xl self-end px-4 py-3 max-w-[80%]${
                        message.sender === "ai" && aiStyle }`}>
                    <pre className="whitespace-pre-wrap">
                        <span>{message.message}</span>
                    </pre>
                    </div>
                )
            })
        }
        <div ref={bottomRef} className="h-3"></div>
    </div>
  )
}

export default ChatBody
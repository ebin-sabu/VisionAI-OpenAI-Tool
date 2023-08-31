import React from 'react'

const ChatBody = () => {
    const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  return (
    <div className="flex flex-col gap-4">

        {/* User Message */}
        <div className="border-[#797979] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]">
            <pre className="whitespace-pre-wrap">
                <span> YO HI OPEN-AI</span>
            </pre>
        </div>

        {/* AI - Response */}
        <div className={`border-[#797979] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle}`}>
            <pre>
                <span> Hi User, Nice to meet you.</span>
            </pre>
        </div>
    </div>
  )
}

export default ChatBody
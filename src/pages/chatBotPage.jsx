import React from "react";
import ChatBotPageNavbar from "../components/chatBotPageNavbar";

export default function ChatBotPage() {
    return (
        <div className="font-sans h-screen w-screen">
            <div className="flex flex-col h-screen w-screen justify-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}>
                <div className="fixed top-0">
                    <ChatBotPageNavbar/>
                </div>

                <div className="h-max w-full flex flex-col justify-center items-center sm:justify-center sm:justify-self-end align-bottom fixed bottom-2 sm:relative">
                    <div className="flex flex-col max-h-50 min-h-26 w-3/4 sm:w-96 bg-gray-950 box-border shadow-blue-400 shadow-2xl rounded-3xl opacity-75 p-2.5 focus-within:outline-2 outline-neutral-500 pb-1 justify-between scheme-dark appearance-none scroll-smooth">
                        <textarea className="resize-none w-full max-h-max min-h-32 outline-0 focus:outline-0 text-white flex flex-col flex-wrap items-center" autoComplete="true" />
                        <div className="flex flex-row justify-between p-2 min-h-8 bg-inherit w-full ">
                            <button className="bg-gray-600 rounded-full h-7 w-7 text-center justify-center self-center text-2xl">+</button>
                            <button className="bg-blue-500 text-inherit p-1.5 rounded-4xl h-8 w-22 text-center justify-center self-center">Send</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
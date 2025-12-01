import React from "react";


export default function Home() {


    return (
        <div className="h-screen w-screen">
            <div className="h-min w-min">
                <div className="md:grid md:grid-cols-50 md:grid-rows-1 h-screen w-screen flex flex-col">
                    <div className="w-screen h-5 fixed z-50 bottom-0 bg-gray-700 md:col-span-3 md:h-screen md:w-16 md:"></div>
                    <div className="md:col-start-3 md:col-end-23 md:w-123.1 bg-amber-300"></div>
                    <div className="md:col-start-23 md:col-end-51 md:w-182 bg-red-800"></div>
                </div>
            </div>
        </div>
    )
}
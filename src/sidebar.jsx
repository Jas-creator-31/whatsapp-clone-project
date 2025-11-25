import React from "react";
// import { motion} from "motion/react"

export default function Sidebar() {

    function theme() {
        const btn = document.querySelector("#btn");

        if (btn.textContent === "dark") {
            document.body.style.backgroundColor = "#010101";
            btn.textContent = "ligth";
        } else if (btn.textContent === "ligth") {
            document.body.style.backgroundColor = "#eeeeee";
            btn.textContent = "dark";
        }
        
        
        
    }

    return (
        <div>
            <button id="menu" className="flex sm:hidden bg-gray-950 p-1 absolute top-0 left-0 z-50 h-12 hover:bg-gray-900 w-max text-gray-50 text-center justify-center align-middle"><p className="text-center p-2 ">menu</p></button>
            <div className="bg-gray-900 hidden sm:w-27 sm:h-svh sm:flex flex-col p-2 align-middle justify-between ac">
                <div className="flex flex-col p-1.5 align-middle w-full h-48 justify-between text-center mt-12 font-extrabold text-2xl relative">
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer">link1</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer">link2</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer">link3</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer">link4</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer">link5</a>
                </div>
                <button className="justify-self-end relative bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-2xl" id="btn" onClick={theme}>dark</button>
            </div>
        </div>
    )
}
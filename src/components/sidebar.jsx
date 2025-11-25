import React from "react";
// import { motion} from "motion/react"

export default function Sidebar() {

    function theme() {
        const btn = document.querySelector("#btn");

        if (btn.textContent === "dark") {
            document.body.style.backgroundColor = "#010101";
            btn.textContent = "ligth";
            document.body.style.color = "#cddefa"
        } else if (btn.textContent === "ligth") {
            document.body.style.backgroundColor = "#eeeeee";
            btn.textContent = "dark";
            document.body.style.color = "#222222"
        }   
    }

    return (
        <div>
            <button id="menu" className="flex sm:hidden bg-gray-950 p-1 absolute top-0 left-0 z-50 h-12 hover:bg-gray-900 w-max text-gray-50 text-center justify-center align-middle"><p className="text-center p-2 ">menu</p></button>
            <div className="bg-gray-900 hidden sm:w-27 sm:h-svh sm:flex flex-col p-2 align-middle justify-between ac">
                <div className="flex flex-col p-1.5 align-middle w-full h-48 justify-between text-center mt-12 font-extrabold text-2xl relative">
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer text-sky-100">link1</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer text-sky-100">link2</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer text-sky-100">link3</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer text-sky-100">link4</a>
                    <a className="hover:-translate-y-1 hover:bg-gray-700 mb-5 rounded-3xl cursor-pointer text-sky-100">link5</a>
                </div>
                <button className="justify-self-end relative bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-2xl text-sky-100" id="btn" onClick={theme}>dark</button>
            </div>
        </div>
    )
}
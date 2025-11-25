import React from "react";
import "./App.css"

export default function Navbar() {
    return (
        <div className="relative w-lvw h-auto z-10">
            <div className="flex flex-row justify-between w-full bg-gray-950 p-2.5 align-middle">
                <h1 className="text-gray-100 items-center w-max">Logo</h1>
                <div className="hidden shadow-gray-100 text-gray-100 sm:flex flex-row w-60 justify-between items-center">
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 1</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 2</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 3</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 4</a>
                </div>
                
                <div className="bg-sky-300 border-0 flex h-7 w-7 rounded-full"></div>
                
            </div>
            <div className="fixed flex flex-row justify-between w-full bg-gray-950 p-2.5 align-middle bottom-0 sm:hidden">
                <div className="shadow-gray-100 text-gray-100 flex flex-row w-svw p-1.5 justify-between items-center sm:hidden bottom-0">
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 1</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 2</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 3</a>
                    <a className="hover:-translate-y-0.5 cursor-pointer">link 4</a>
                </div>
            </div>
            
        </div>
    )
}
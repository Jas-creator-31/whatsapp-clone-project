import React from "react";
import smImage from "../assets/pexels-andrew-3178786.jpg";



export default function LoginPage() {
    return (
        <div className="font-sans">
            <div>
                <div className="relative h-screen w-screen overflow-hidden bg-blue-500 flex flex-row">
                    <div className="h-screen flex-1 bg-linear-to-b from-emerald-50 to-emerald-700 text-gray-950 flex flex-col">
                        <div className="relative w-full h-25 flex flex-col justify-end-safe items-center">
                            <h1 className="flex flex-col justify-end-safe h-full font-extrabold text-4xl text-gray-800">Welcome back</h1>
                        </div>
                        <div className="relative h-70 min-w-svw flex flex-col p-2.5 top-16 justify-around">
                            <div className="flex flex-col justify-center align-middle mt-5">
                               
                                <div className="h-max w-full flex flex-col justify-center items-center">
                                    <p className="text-left w-60">Email Address</p>
                                    <input className="w-60 h-10 rounded-2xl bg-green-800 p-1" type="email" id="emailInput" placeholder="Enter your email" />
                                </div>

                            </div>

                            <div className="flex flex-col justify-center align-middle mt-5">
                                <div className="h-max w-full flex flex-col justify-center items-center">
                                    <p className="text-left w-60">Password</p>
                                    <input className="w-60 h-10 rounded-2xl bg-green-800 p-1 flex flex-row justify-self-center " type="password" id="password" placeholder="Password" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center align-middle mt-5">
                                <div className="h-max w-full flex flex-col justify-center items-center">
                                    <p className="text-left w-60">Confirme Password</p>
                                    <input className="w-60 h-10 rounded-2xl bg-green-800 p-1 flex flex-row justify-self-center " type="password" id="passwordConfirme" placeholder="Confirme password" />
                                </div>

                            </div>

                            <button className="bg-green-800 p-2 w-60 h-10 rounded-2xl self-center mt-10" type="submit">Ligin</button>

                            <div className="flex flex-row justify-center mt-5">
                                <p>Don't have a account?</p>
                                <a href="" className="ml-3 text-amber-200 hover:-translate-y-1 contrast-100">Sign up</a>
                            </div>
                            
                        </div>

                    </div>
                    <img className=" sm:block h-screen w-80 object-cover" src={smImage} alt="illustration" height={100} width={50}/>
                </div>
            </div>
        </div>
    )
}
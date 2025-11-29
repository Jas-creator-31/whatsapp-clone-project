import React, { useState } from "react";


export default function LoginPage() {

    const [emailValue, setEmailValue] = useState('')
    const [emailEarrorText, setEmailEarrorText] = useState('');
    const [passwordEarrorText, setPasswordEarrorText] = useState('');
    const [password, setPassword] = useState('');

    const [confirmePasswordEarrorText, setConfirmePasswordEarrorText] = useState('')
    const [confirmePassword, setConfirmePassword] = useState('');

    const hadleEmailEarror = () => {
        if (emailValue === ''){
            setEmailEarrorText('email is requed');
        }
    }

    const hadlePasswodeEarror = () => {
        if (password === '') {
            setPasswordEarrorText("password is requed")
        } else if (password.length < 6) {
            setPasswordEarrorText("Password is too short")
        }
    }

    const hadleConfirmePassword = () => {
        if (confirmePassword === '') {
            setConfirmePasswordEarrorText("Confirme Password is requed")
        } else if (confirmePassword !== password) {
            setConfirmePasswordEarrorText("Password don't macth")
        }
    }

    const hadleForm = () => {
        event.preventDefault();
        hadleEmailEarror()
        hadlePasswodeEarror()
        hadleConfirmePassword()
    }

    return (
        <div className="font-sans">

            <div>
                <div className="relative h-screen w-screen overflow-hidden flex flex-row">
                    <div className="h-screen flex-1 bg-linear-to-b from-sky-50 to-blue-700 text-gray-950 flex flex-col">

                        <div className="relative w-full h-25 flex flex-col justify-end-safe items-center">
                            <h1 className="flex flex-col justify-end-safe h-full font-extrabold text-4xl text-gray-800">Welcome back</h1>
                        </div>
                        <div className="relative h-70 w-max flex flex-col p-2.5 top-16 justify-around self-center">
                            <form onSubmit={hadleForm}>
                                <div className="flex flex-col justify-center align-middle items-center mt-2">

                                    <div className="h-max w-full flex flex-col justify-center items-center">
                                        <p className="text-left w-59">Email Address</p>
                                        <input className="w-60 h-10 rounded-2xl bg-sky-100 p-1 focus:outline-2 focus:outline-blue-500" type="email" placeholder="Enter your email" onChange={(e) => setEmailValue(e.target.value)}/>
                                        <p className="text-left w-59 text-red-600 h-3 errorText">{emailEarrorText}</p>
                                    </div>

                                </div>

                                <div className="flex flex-col justify-center align-middle mt-2">
                                    <div className="h-max w-full flex flex-col justify-center">
                                        <p className="text-left w-59">Password</p>
                                        <input className="w-60 h-10 rounded-2xl bg-sky-100 p-1 flex flex-row justify-self-center focus:outline-2 focus:outline-blue-500" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                        <p className="text-left w-59 text-red-600 h-3 errorText">{passwordEarrorText}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center align-middle mt-2">
                                    <div className="h-max w-full flex flex-col justify-center items-center">
                                        <p className="text-left w-59">Confirme Password</p>
                                        <input className="w-60 h-10 rounded-2xl bg-sky-100 p-1 flex flex-row justify-self-center focus:outline-2 focus:outline-blue-500" type="password" id="passwordConfirme" placeholder="Confirme password" onChange={(e) => setConfirmePassword(e.target.value)}/>
                                        <p className="text-left w-59 text-red-600 h-3 errorText">{confirmePasswordEarrorText}</p>
                                    </div>

                                </div>

                                <button className="bg-blue-600 p-2 w-60 h-10 rounded-2xl self-center mt-10 hover:bg-blue-700 hover:cursor-pointer" type="submit">Login</button>
                            </form>
                            <div className="flex flex-row justify-center mt-5">
                                <p>Don't have a account?</p>
                                <a href="/" className="ml-3 text-amber-200 hover:-translate-y-1 contrast-100 hover:underline">Sign up</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
"use client"

import { arch } from "./font"

export default function Hero() {
    return (
        <div className="w-full h-[400px]" >
            <video src={"./bg2.mp4"} className="absolute w-full z-10 object-cover h-[500px]" autoPlay muted loop></video>
            <div className="absolute w-full h-[500px] z-20 bg-black opacity-70"></div>
            <div className={arch.className}>
                <div className="absolute z-20 w-[300px] lg:w-[800px] mt-44 ml-10">
                    <h1 className="text-white text-5xl">Over 3000 varieties of Tea, solely to heal and brighten you up</h1>
                </div>
            </div>
        </div>
    )
}
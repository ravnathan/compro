"use client"

import { arch } from "./font"
import Services from "./services"
import Overview from "./overview"


export default function Body() {
    return (
        <div className="bg-green-950 h-full">
            <div className="bg-transparent h-[400px]">
                <div className={arch.className}>
                    <h1 className="text-center pt-60 text-white text-5xl">Happiness can simply come from your own cup</h1>
                </div>
            </div>
            <div className="pt-14 ">
                <Overview />
            </div>
            <div className="pt-20">
                <div className="bg-white rounded-xxl pb-20">
                    <div className={arch.className}>
                        <h1 className="text-center py-16 text-black text-5xl sm:text-2xl">What we offer</h1>
                    </div>
                    <Services />
                </div>
            </div>
        </div>
    )
}


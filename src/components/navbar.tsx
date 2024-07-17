"use client"

import { arch } from "./font";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clsx } from 'clsx';



export default function Navbar() {
    const itemNav = [
        { href: '/', konten: 'Home' },
        { href: '/aboutus', konten: 'About Us' },
        { href: '/srvce', konten: 'Services' },
        { href: '/teams', konten: 'Teams' },
    ]

    const [hambur, setHambur] = useState(false)
    return (
        <div className="w-full sticky top-0 z-30">
            <div className="flex justify-between items-center px-10 h-14 bg-green-950">
                <Link href={"/"}><Image src={"/deteawhite.png"} alt="DeTea Logo" width={60} height={60} className="lg:hover:scale-125" /></Link>
                <div className="hidden lg:flex gap-10">
                    {
                        itemNav.map((item, key) => {
                            return (
                                <div className={arch.className} key={key}>
                                    <Link className="text-white text-lg hover:bg-white hover:text-black border-transparent py-2 px-4 rounded-full" href={item.href}>{item.konten}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <button aria-label="Aria Burger" onClick={() => setHambur(!false)} className="lg:hidden text-white"><svg width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>
            </div>
            <div className={clsx("h-screen w-screen bg-white/50 backdrop-blur-sm top-0 absolute flex justify-center -translate-x-full" , hambur && 'translate-x-0')}>
                <div className="bg-green-950 w-80 h-[450px] relative">
                    <button aria-label="Aria burger" onClick={() => setHambur(false)} className="right-0 absolute"><svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></button>
                    {
                        itemNav.map((item, key) => {
                            return (
                                <div className={arch.className} key={key}>
                                    <div className="flex justify-center mt-10">
                                        <Link onClick={() => setHambur(false)} className="text-white" href={item.href}>{item.konten}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
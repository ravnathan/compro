"use client"

import Image from "next/image"
import { gel } from "@/components/font"

export default function Founder() {
    return (
        <div className="hero bg-green-950 min-h-screen text-white rounded-xxl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold text-center">Founders</h1>
                    <div className={gel.className}>
                        <p className="py-6 lg:px-10">
                            Nat Heinrich, a remarkable World War II veteran whose courage on the battlefield 
                            was matched only by his vision for a peaceful world. In 1947, together with his beloved wife 
                            Leonie Heinrich, founded DeTea, a humble tea cafe that has since blossomed into a global phenomenon. 
                            Nat & Leonie Heinrich&apos;s dedication to quality and innovation have transformed DeTea into more than 
                            just a cafe; it&apos;s a haven where patrons can find solace and rejuvenation through the therapeutic 
                            benefits of herbal blends. From bustling city streets to serene countryside retreats, DeTea continues 
                            to spread Nat & Leonie Heinrich&apos;s legacy of resilience, compassion, and the belief that a simple cup 
                            of tea can heal both body and spirit.
                        </p>
                    </div>
                </div>
                <Image src={"/mewife.jpg"} width={300} height={380} alt="DeTea Founder" className="rounded-xxl border-4 border-white sm:w-[220px]"/>
                <Image src={"/meold.jpg"} width={210} height={380} alt="DeTea Founder" className="rounded-xxl border-4 border-white"/>
            </div>
        </div>
    )
}
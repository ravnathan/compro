import Image from "next/image";
import Fetching from "./_components/fetching";
import { arch } from "@/components/font";
import Testi from "./_components/testi";

export default function Services() {
    return (
        <div >
            <Image src={'/teacup1.jpg'} className="w-full h-[400px] object-cover" width={800} height={200} alt="" />
            <div className={arch.className}>
                <h1 className="text-4xl text-center bg-green-950 text-white pt-7">Our products & services</h1>
            </div>
            <div className="bg-base-200 rounded-xxl">
                <Fetching />
            </div>
            <Testi/>
        </div>

    )
}
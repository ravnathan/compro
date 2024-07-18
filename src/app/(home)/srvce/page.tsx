import Image from "next/image";
import Fetching from "./_components/fetching";
import { arch } from "@/components/font";
import Testi from "./_components/testi";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Service",
    description: "DeTea products and services"
}

export default function Services() {
    return (
        <div className="bg-green-950">
            {/* <Image src={'/greendetea.svg'} className="mx-auto object-cover bg-green-950" width={200} height={200} alt="Teacup header" /> */}
            <div className={arch.className}>
                <h1 className="text-4xl text-center text-white pt-10 lg:text-6xl">Our products & services</h1>
            </div>
            <Fetching/>
            <Testi/>
        </div>

    )
}
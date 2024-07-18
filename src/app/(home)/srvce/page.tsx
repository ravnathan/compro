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
            <Image src={'/greendetea.svg'} className="mx-auto object-cover bg-green-950" width={500} height={200} alt="Teacup header" />
            <div className={arch.className}>
                <h1 className="text-4xl text-center text-white">Our products & services</h1>
            </div>
            <div className="bg-base-200 rounded-xxl">
                <Fetching />
            </div>
            <Testi/>
        </div>

    )
}
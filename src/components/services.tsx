"use client"

import Image from "next/image"
import { marg } from "./font"

export default function Services() {
    return (
    <div className="flex justify-evenly text-white pb-10">
        <div className="card card-compact bg-green-950 w-96 shadow-xl">
            <figure>
                <Image src={"/teashop.jpg"} width={400} height={400} alt="DeTea Cafe"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tea Cafe</h2>
                <p className={marg.className}>Over 520 branches all over the globe to spread the health in a form of joy</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
        <div className="card card-compact bg-green-950 w-96 shadow-xl">
            <figure>
                <Image src={"/teashelf.jpg"} width={400} height={400} alt="DeTea Tea & Herbs"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Mix of Herbs</h2>
                <p className={marg.className}>Providing you with hundreds choices of flavors</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
        <div className="card card-compact bg-green-950 w-96 shadow-xl">
            <figure>
                <Image src={"/teapacks.jpeg"} width={400} height={400} alt="DeTea Tea Packs"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Tea & Herbs Packs</h2>
                <p className={marg.className}>Perfect for you who prefer to have your own joy anywhere</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
    </div>
    )
}
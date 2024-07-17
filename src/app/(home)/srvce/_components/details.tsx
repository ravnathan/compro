import Image from "next/image";
import { arch } from "@/components/font";

interface IData {
    name: string
    content: string
    img: string
}

export default function Details({ name, content, img }: IData) {
    return (
        <div>
            <div className="hero bg-green-950 min-h-screen text-white">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <Image src={`https:${img}`} width={380} height={300} alt="details" />
                    <div>
                        <div className={arch.className}>
                            <h1 className="text-5xl font-bold px-10 sm:px-16">{name}</h1>
                        </div>
                        <p className="py-6 px-10 ">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


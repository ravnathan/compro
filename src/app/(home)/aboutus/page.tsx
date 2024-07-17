import Culture from "./_components/culture";
import Founder from "./_components/founder";
import Timeline from "./_components/timeline";
import { arch } from "@/components/font";

export default function AboutUs(){
    return (
        <div className="bg-white">
            <div className={arch.className}>
                <h1 className="text-6xl text-black py-24 text-center">Our history</h1>
            </div>
            <Timeline/>
            <Founder/>
            <Culture/>
        </div>
    )
}
import TeamCards from "./_components/teamcards";
import { arch } from "@/components/font";

export default function Teams() {
    return (
        <div className="bg-white h-full">
            <div className={arch.className}>
                <h1 className="text-center text-6xl text-black py-8">Our teams</h1>
            </div>
            <TeamCards />
        </div>
    )
}
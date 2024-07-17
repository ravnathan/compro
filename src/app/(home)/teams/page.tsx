import TeamCards from "./_components/teamcards";
import { arch } from "@/components/font";

export default function Teams() {
    return (
        <div>
            <div className={arch.className}>
                <h1 className="text-center text-6xl text-white py-8">Our teams</h1>
            </div>
            <TeamCards />
        </div>
    )
}